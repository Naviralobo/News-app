import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next News -Your Source for Breaking News",
  description: "Stay informed with the latest news and in-depth analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200">
          <nav className="max-w-full max-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center gap-2 text-xl font-bold text-gray-900"
                href="/"
              >
                Next News
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="text-gray-500 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Search
                </Link>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-14">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              @2025 Next Nexws. Built with Next.js, Typescript and Tailwind css.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
