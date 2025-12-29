"use client";

import { use } from "react";
import Link from "next/link";
import { getHymnsByCategory, categories } from "@/data";

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const categoryId = parseInt(id);
    const category = categories.find(c => c.id === categoryId);
    const hymns = getHymnsByCategory(categoryId);

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Category Not Found</h1>
                    <Link href="/" className="btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ background: "var(--background)" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 px-4 py-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
            >
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                            title="Go to home"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-white">{category.name}</h1>
                            <p className="text-sm text-white/70">{hymns.length} hymns</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-6">
                <div className="space-y-3 animate-fade-in">
                    {hymns.map((hymn, index) => (
                        <Link
                            key={hymn.id}
                            href={`/hymn/${hymn.id}`}
                            className="block p-4 rounded-xl card-hover"
                            style={{
                                background: "var(--surface)",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                animationDelay: `${index * 30}ms`
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <span
                                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
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
