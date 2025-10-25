import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="max-w-xl w-full px-6 py-12 rounded-3xl shadow-2xl bg-slate-900 bg-opacity-80 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Codex</h1>
        <p className="text-lg mb-8 text-slate-300 text-center">
          Collaborative online code editor supporting multiple languages in real time.<br/>
          Write, run, and share code instantly with anyone, anywhere.
        </p>
        <Link href="/editor">
          <button className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold shadow-lg transition-colors">
            Start Coding
          </button>
        </Link>
      </div>
      <footer className="mt-12 text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Codex. All rights reserved.
      </footer>
    </main>
  );
}
