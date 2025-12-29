"use client";

import Link from "next/link";
import { allHymns } from "@/data";

export default function AllHymnsPage() {
    return (
        <div className="min-h-screen" style={{ background: "var(--background)" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 px-4 py-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)" }}
            >
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,255,255,0.2)" }}
                            title="Go to home"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-white">All Hymns</h1>
                            <p className="text-sm text-white/80">{allHymns.length} hymns</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-6">
                <div className="space-y-3 animate-fade-in">
                    {allHymns.map((hymn, index) => (
                        <Link
                            key={hymn.id}
                            href={`/hymn/${hymn.id}`}
                            className="block p-4 rounded-xl card-hover"
                            style={{
                                background: "var(--surface)",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                animationDelay: `${Math.min(index * 20, 500)}ms`
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <span
                                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                                    style={{ background: "var(--primary)" }}
                                >
                                    {hymn.id}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                                        {hymn.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                                        {hymn.author}
                                    </p>
                                </div>
                                <svg
                                    className="w-5 h-5 flex-shrink-0"
                                    style={{ color: "var(--accent)" }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
