import { div } from "framer-motion/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const newsArticles = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    excerpt:
      "Scientists have developed an AI that can predict the future with 999% accuracy",
    category: "technology",
    publishedAt: "2025-06-15",
  },
  {
    id: 2,
    title: "Climate Solutions: The Unexpected Hero",
    excerpt:
      "A small startup discovers a way to reverse climate change using everyday materials",
    category: "environment",
    publishedAt: "2025-06-11",
  },
  {
    id: 3,
    title: "Space Tourism Takes Off",
    excerpt:
      "Regular people are now booking flights to space less than the cost of a luxury car",
    category: "space",
    publishedAt: "2025-06-01",
  },
];

const categories = {
  technology: { name: "Technology", description: "Latest in Tech and AI" },
  environment: {
    name: "Environment",
    description: "Climate and sustainability",
  },
  space: { name: "Space", description: "space exploration and tourism" },
};

interface CategoryParamsProps {
  params: Promise<{
    slug: keyof typeof categories;
  }>;
}

export default async function CategoryPage({ params }: CategoryParamsProps) {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) {
    notFound();
  }

  const categoryArticles = newsArticles.filter(
    (article) => article.category === slug,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            className="text-blue-500 hover:text-blue-800 flex items-center"
            href="/"
          >
            Back to Home
          </Link>
        </nav>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {category.name}
          </h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {categoryArticles.map((article) => (
            <article
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition:shadow duration-200"
              key={article.id}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 p-2 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-sm font-gray-500">
                    {article.publishedAt}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <div className="flex gap-1">
                  <Link
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                    href={`/article/${article.id}`}
                  >
                    Read More
                  </Link>
                  <Link
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
                    href={`/category/${article.category}/${article.id}`}
                  >
                    Category View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Categories
          </h2>
          <div className="grid gap-4 grid-cols-3">
            {Object.entries(categories)
              .filter(([slugItem]) => slugItem != slug)
              .map(([slugItem, cat]) => (
                <Link
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  href={`/category/${slugItem}`}
                  key={slugItem}
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cat.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
