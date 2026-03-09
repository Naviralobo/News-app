import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-sceen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            href="/"
          >
            Back to Home
          </Link>
        </nav>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Next News
            </h1>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Next News, your premier destination for brraking news
              and in-depth analysis. We're committed to delivering accurrate,
              timely and engaging content that matters to you.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To provide clea, unbiased reporting on the stories that shape our
              world. From Technology breakthrough to envionmental solution we
              cover the news that impacts your daily life and future
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Built With
            </h2>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Next.js</strong> - The React Framework for production
              </li>
              <li>
                <strong>Typescript </strong> - For type-safe, reliable code
              </li>
              <li>
                <strong>Tailwind css</strong> - For rapid, responsive style
              </li>
              <li>
                <strong>App outer </strong> - Next.js's powerful routing system
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Learning Next.js Routing?
              </h3>
              <p className="text-blue-800">
                This app demonstrate key concepts including file-based routing,
                dynaic route, custom 404 pages and navigation pattern. Perfect
                for understanding modern web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
