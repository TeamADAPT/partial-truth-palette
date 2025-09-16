import Link from "next/link";
import { listMocks } from "~/lib/mocks";

export const dynamic = "force-static";

export default async function PreviewIndexPage() {
  const mocks = listMocks();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">MyBizAI Previews</h1>
        <p className="text-muted-foreground mt-2">
          All mock-driven screens integrated from the <code>/mocks</code> directory.
        </p>

        <div className="mt-8 flex items-center gap-2">
          <input
            type="text"
            placeholder="Filter by name..."
            className="w-full max-w-md rounded-md border bg-background px-3 py-2 text-sm"
            onChange={(e) => {
              const q = e.currentTarget.value.toLowerCase();
              document
                .querySelectorAll<HTMLAnchorElement>("[data-mock-item]")
                .forEach((el) => {
                  const t = (el.dataset.title || "").toLowerCase();
                  el.parentElement!.classList.toggle("hidden", !t.includes(q));
                });
            }}
          />
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {mocks.map((m) => (
            <li key={m.slug} className="">
              <Link
                data-mock-item
                data-title={`${m.title} ${m.slug}`}
                href={`/preview/${m.slug}`}
                className="block rounded-md border p-3 hover:bg-muted"
              >
                <div className="text-sm text-muted-foreground">{m.slug}</div>
                <div className="font-medium">{m.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

