import { notFound } from "next/navigation";
import { getMockHtml } from "~/lib/mocks";

export const dynamic = "force-static";

type Props = { params: { slug: string } };

export default async function MockPage({ params }: Props) {
  const data = getMockHtml(params.slug);
  if (!data) return notFound();

  return (
    <main className={`min-h-screen text-foreground ${data.bodyClass ?? "bg-background"}`}>
      <div className="container py-6">
        <div className="mb-4 flex items-center justify-between">
          <a
            href="/preview"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Back to Previews
          </a>
          <span className="text-xs text-muted-foreground">{params.slug}</span>
        </div>
        <article className="overflow-hidden rounded-xl border bg-card shadow">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.html }} />
        </article>
      </div>
    </main>
  );
}
