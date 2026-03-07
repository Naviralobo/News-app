import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    excerpt:
      "Scientists have developed an AI that can predict the future with 999% accuracy",
    category: "Technology",
    publishedAt: "2025-06-15",
  },
  {
    id: 2,
    title: "Climate Solutions: The Unexpected Hero",
    excerpt:
      "A small startup discovers a way to reverse climate change using everyday materials",
    category: "Environment",
    publishedAt: "2025-06-11",
  },
  {
    id: 3,
    title: "Space Tourism Takes Off",
    excerpt:
      "Regular people are now booking flights to space less than the cost of a luxury car",
    category: "Space",
    publishedAt: "2025-06-01",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Next News</h1>
          <p className="text-gray-600 text-lg">
            Your source for latest breaking news
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300 "
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.publishedAt}
                  </span>
                </div>
                <h2 className="text-xl font-semisolid text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  className="mt-auto w-fit inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  href={`/article/${article.id}`}
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
