import type { Config } from "tailwindcss";

import baseConfig from "@saasfly/tailwind-config";

export default {
  content: [...baseConfig.content, "../../packages/ui/src/**/*.{ts,tsx}", "./src/**/*.{ts,tsx,mdx}"],
  presets: [baseConfig],
  // v1 preview: ensure all Tailwind classes used in imported mock HTML are kept
  safelist: [{ pattern: /.*/ }],
} satisfies Config;
