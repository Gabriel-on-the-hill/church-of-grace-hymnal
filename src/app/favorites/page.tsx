"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { allHymns } from "@/data";
import type { Hymn } from "@/data";

export default function FavoritesPage() {
    const [favoriteHymns, setFavoriteHymns] = useState<Hymn[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
        const hymns = allHymns.filter(h => favoriteIds.includes(h.id));
        setFavoriteHymns(hymns);
        setLoading(false);
    }, []);

    return (
        <div className="min-h-screen" style={{ background: "var(--background)" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 px-4 py-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }}
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
                            <h1 className="text-xl font-bold text-white">Favorite Hymns</h1>
                            <p className="text-sm text-white/70">{favoriteHymns.length} saved</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-6">
                {loading ? (
                    <div className="text-center py-12" style={{ color: "var(--text-muted)" }}>
                        Loading...
                    </div>
                ) : favoriteHymns.length === 0 ? (
                    <div className="text-center py-12 animate-fade-in">
                        <div
                            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                            style={{ background: "var(--surface)" }}
                        >
                            <svg
                                className="w-10 h-10"
                                style={{ color: "var(--text-muted)" }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                            No Favorites Yet
                        </h2>
                        <p className="mb-6" style={{ color: "var(--text-muted)" }}>
                            Tap the heart icon on any hymn to save it here.
                        </p>
                        <Link href="/" className="btn-primary">
                            Browse Hymns
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3 animate-fade-in">
                        {favoriteHymns.map((hymn, index) => (
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
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
