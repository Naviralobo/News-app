import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Article Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Sorry, the article you are loooking for does not exist. It might have
        been moved, deleted or you entered the wrong url{" "}
      </p>
      <div className="space-y-4">
        <Link
          className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duation-300"
          href="/"
        >
          Back to home
        </Link>
      </div>
      <div className="mt-5 text-center">
        <p className="text-sm text-gray-500">or try these popular articles</p>
        <div className="mt-2 space-y-1">
          <Link
            className="block text-sm text-blue-600 hover:text-blue-800"
            href="/article/1"
          >
            Revolutionary AI Breakthrough changes everything
          </Link>

          <Link
            className="block text-sm text-blue-600 hover:text-blue-800"
            href="/article/2"
          >
            Climate Solution : The Unexpected Hero
          </Link>
          <Link
            className="block text-sm text-blue-600 hover:text-blue-800"
            href="/article/3"
          >
            Space Tourism Takes Off
          </Link>
        </div>
      </div>
    </div>
  );
}
