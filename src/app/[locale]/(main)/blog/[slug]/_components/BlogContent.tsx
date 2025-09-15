import { marked } from "marked";

interface BlogContentProps {
  content: string;
}

export default async function BlogContent({ content }: BlogContentProps) {
  const html = await marked(content);

  return (
    <section className="pb-8 animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-a:text-blue-600 prose-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
}
