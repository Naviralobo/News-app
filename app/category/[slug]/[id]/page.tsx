import Link from "next/link";
import { notFound } from "next/navigation";

const categories = {
  technology: { name: "Technology", description: "Latest in Tech and AI" },
  environment: {
    name: "Environment",
    description: "Climate and sustainability",
  },
  space: { name: "Space", description: "space exploration and tourism" },
};

const newsArticles = [
  {
    id: 1,
    title: "AI Assistants Are Becoming Everyday Co-Workers",
    excerpt:
      "Companies are rapidly adopting AI assistants to automate routine tasks and improve productivity across teams.",
    content:
      "Artificial Intelligence is no longer limited to research labs. Businesses across the world are integrating AI assistants into their daily workflows. From scheduling meetings to analyzing data, AI tools are helping employees complete tasks faster and with fewer errors. Experts believe that in the coming years, AI will not replace workers but instead act as a powerful collaborator that enhances human capabilities.",
    category: "technology",
    publishedAt: "2025-06-18",
    author: "Sarah Mitchell",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "New Renewable Energy Project Powers Entire Coastal Town",
    excerpt:
      "A solar and wind hybrid project has successfully powered a small coastal town entirely with renewable energy.",
    content:
      "In a landmark achievement for clean energy, a coastal town has become fully powered by renewable sources. The project combines offshore wind turbines with a large-scale solar farm to provide consistent electricity. Local officials say the initiative will significantly reduce carbon emissions while lowering long-term energy costs for residents.",
    category: "environment",
    publishedAt: "2025-06-16",
    author: "Daniel Carter",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Private Space Flights Becoming More Accessible",
    excerpt:
      "The cost of private space travel continues to fall as new aerospace companies enter the market.",
    content:
      "Space tourism is moving closer to reality for ordinary people. Several aerospace companies are developing reusable spacecraft designed to reduce the cost of launching passengers into orbit. Analysts predict that within the next decade, space travel could become a premium vacation experience rather than an exclusive adventure for billionaires.",
    category: "space",
    publishedAt: "2025-06-12",
    author: "Emily Johnson",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Breakthrough in Battery Technology Extends EV Range",
    excerpt:
      "Researchers have developed a next-generation battery that could double the driving range of electric vehicles.",
    content:
      "Scientists at a leading research institute have announced a major breakthrough in battery technology. The new battery design uses advanced materials that store significantly more energy than traditional lithium-ion cells. This innovation could allow electric vehicles to travel nearly twice the distance on a single charge while reducing charging times.",
    category: "Technology",
    publishedAt: "2025-06-10",
    author: "Michael Chen",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Urban Farming Is Transforming City Food Supply",
    excerpt:
      "Cities are turning rooftops and unused spaces into productive farms to support local food systems.",
    content:
      "Urban farming is gaining popularity as cities look for sustainable ways to produce food locally. Rooftop gardens, vertical farms, and hydroponic systems are helping communities grow fresh produce within city limits. Advocates say urban farming not only improves food security but also reduces transportation emissions and strengthens community engagement.",
    category: "Agriculture",
    publishedAt: "2025-06-08",
    author: "Laura Bennett",
    readTime: "4 min read",
  },
];

interface CategoryArticlePageProps {
  params: {
    id: string;
    slug: string;
  };
}

export default async function CategoryArticlePage({
  params,
}: CategoryArticlePageProps) {
  const { id, slug } = await params;
  const category = categories[slug as keyof typeof categories];
  const articleId = parseInt(id);
  const article = newsArticles.find((a) => {
    console.log(a.id, articleId);
    return a.id === articleId;
  });

  if (!article || !category || article.category !== slug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items center gap-3"
          >
            Back to Home
          </Link>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span> By {article.author}</span>
            <span>.</span>
            <span>{article.publishedAt}</span>
          </div>
        </header>
        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            {article.content
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
          </div>
        </article>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            More Articles
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {newsArticles
              .filter((a) => a.id !== articleId)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/article/${relatedArticle.id}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md scale-101 transition-all duration-300"
                >
                  <h4 className="font-medium text-gray-900 mb-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {relatedArticle.excerpt.substring(0, 100)}...
                  </p>
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
