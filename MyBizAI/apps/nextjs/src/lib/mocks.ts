import fs from "node:fs";
import path from "node:path";

const CANDIDATE_DIRS = [
  path.resolve(process.cwd(), "..", "..", "mocks"),
  path.resolve(process.cwd(), "mocks"),
  path.resolve(process.cwd(), "../../mocks"),
];

function resolveMocksDir(): string {
  for (const dir of CANDIDATE_DIRS) {
    try {
      const stat = fs.statSync(dir);
      if (stat.isDirectory()) return dir;
    } catch {}
  }
  throw new Error("Unable to locate /mocks directory from Next.js app");
}

const MOCKS_DIR = resolveMocksDir();

export type MockEntry = {
  slug: string;
  file: string;
  title: string;
};

export type MockContent = {
  html: string;
  bodyClass?: string;
  bodyStyle?: string;
};

export function listMocks(): MockEntry[] {
  const files = fs
    .readdirSync(MOCKS_DIR)
    .filter((f) => f.endsWith(".html"))
    .sort((a, b) => a.localeCompare(b));
  return files.map((file) => {
    const slug = path.basename(file, ".html");
    const title = toTitle(slug);
    return { slug, file: path.join(MOCKS_DIR, file), title };
  });
}

export function getMockHtml(slug: string): MockContent | null {
  const file = path.join(MOCKS_DIR, `${slug}.html`);
  try {
    const raw = fs.readFileSync(file, "utf8");
    // Extract <body> content and attributes if present
    const bodyOpenMatch = raw.match(/<body([^>]*)>/i);
    const bodyContentMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let html = bodyContentMatch ? bodyContentMatch[1] : raw;
    let bodyClass: string | undefined;
    let bodyStyle: string | undefined;
    if (bodyOpenMatch && bodyOpenMatch[1]) {
      const attrs = bodyOpenMatch[1];
      const classMatch = attrs.match(/class=\"([^\"]*)\"/i);
      const styleMatch = attrs.match(/style=\"([^\"]*)\"/i);
      bodyClass = classMatch?.[1];
      bodyStyle = styleMatch?.[1];
    }
    // Remove external Tailwind CDN/script tags to avoid conflicts
    html = html
      .replace(/<script[^>]*cdn\.tailwindcss\.com[^<]*<\/script>/gi, "")
      .replace(/<link[^>]*fonts\.(?:googleapis|gstatic)\.com[^>]*>/gi, "")
      .replace(/<meta[^>]*charset[^>]*>/gi, "")
      .replace(/<title>[\s\S]*?<\/title>/gi, "")
      .trim();
    return { html, bodyClass, bodyStyle };
  } catch {
    return null;
  }
}

function toTitle(slug: string): string {
  return slug
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
