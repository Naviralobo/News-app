"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

export default function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(newsArticles);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setSearchResults(newsArticles);
      return;
    }

    const filteredArticles = newsArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(term.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        article.category.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(filteredArticles);
  };

  const handleRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * newsArticles.length);
    const randomArticle = newsArticles[randomIndex];
    router.push(`/article/${randomArticle.id}`);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Search Articles</h1>
          <button
            className="text-blue-600 hover:text-blue-800 flex items-center"
            type="button"
            onClick={goBack}
          >
            Go Back
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="search article..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors duration-300"
              type="button"
              onClick={handleRandomArticle}
            >
              Random Article
            </button>
          </div>
          <p className="text-small text-gray-600 ">
            Found {searchResults.length} article
            {searchResults.length > 1 ? "s" : ""}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((article) => (
            <article
              key={article.id}
              className="p-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 p-2 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-5000">
                    {article.publishedAt}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition:colors duration:300"
                  href={`/articles/${article.id}`}
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {searchResults.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-demibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try searching for "AI", "Climate" or "space"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
