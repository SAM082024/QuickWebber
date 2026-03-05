// src/app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-5xl font-bold mb-4 mt-25 text-[rgb(34,139,230)]">
        Welcome to QuickWebber
      </h1>
      <p className="text-lg mb-6 text-center max-w-xl text-[rgb(100,100,100)]">
        This is a Next.js + TypeScript + Tailwind template, ready to start building your project!
      </p>
      <div className="flex gap-4">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Tailwind Docs
        </a>
      </div>

      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <section className="min-h-screen w-full flex items-center justify-center">
            <h1 className="text-7xl font-semibold">SECTION 1</h1>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center">
            <h1 className="text-7xl font-semibold">SECTION 2</h1>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center">
            <h1 className="text-7xl font-semibold">SECTION 3</h1>
        </section>
      </div>
    </main>
  );
}