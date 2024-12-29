"use client";
import Link from "next/link";

// Error boundaries must be Client Components

export default function Error() {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="max-w-sm rounded-lg bg-white p-8 text-center shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-red-500">
            Something went wrong!
          </h2>
          <p className="mb-6 text-gray-600">An unexpected error occurred.</p>
          <Link
            href="/"
            className="rounded bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
          >
            Try again
          </Link>
        </div>
      </body>
    </html>
  );
}
