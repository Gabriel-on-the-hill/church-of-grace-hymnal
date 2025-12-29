"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { getHymnById, categories } from "@/data";
import ThemeToggle from "@/components/ThemeToggle";


export default function HymnPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const hymnId = parseInt(id);
    const hymn = getHymnById(hymnId);

    const [fontSize, setFontSize] = useState(18);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Load saved font size
        const savedFontSize = localStorage.getItem("hymnFontSize");
        if (savedFontSize) setFontSize(parseInt(savedFontSize));

        // Check if this hymn is a favorite
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(hymnId));
    }, [hymnId]);

    const handleFontSizeChange = (newSize: number) => {
        const clampedSize = Math.max(14, Math.min(28, newSize));
        setFontSize(clampedSize);
        localStorage.setItem("hymnFontSize", clampedSize.toString());
    };

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        let newFavorites;
        if (isFavorite) {
            newFavorites = favorites.filter((id: number) => id !== hymnId);
        } else {
            newFavorites = [...favorites, hymnId];
        }
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    if (!hymn) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Hymn Not Found</h1>
                    <Link href="/" className="btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    const category = categories.find(c => c.id === hymn.categoryId);

    return (
        <div className="min-h-screen" style={{ background: "var(--background)" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 px-4 py-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
            >
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between">
                        <Link
                            href={`/category/${hymn.categoryId}`}
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                            title="Back to category"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
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


                        <div className="flex items-center gap-2">
                            {/* Dark Mode Toggle */}
                            <ThemeToggle />

                            {/* Font Size Controls */}
                            <button
                                onClick={() => handleFontSizeChange(fontSize - 2)}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                                style={{ background: "rgba(255,255,255,0.1)" }}
                                title="Smaller text"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="10" cy="10" r="6" strokeWidth={2} />
                                    <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                                    <path strokeLinecap="round" strokeWidth={2.5} d="M7 10h6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleFontSizeChange(fontSize + 2)}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                                style={{ background: "rgba(255,255,255,0.1)" }}
                                title="Bigger text"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="10" cy="10" r="6" strokeWidth={2} />
                                    <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                                    <path strokeLinecap="round" strokeWidth={2.5} d="M7 10h6M10 7v6" />
                                </svg>
                            </button>

                            {/* Favorite Button */}
                            <button
                                onClick={toggleFavorite}
                                className={`w-10 h-10 rounded-full flex items-center justify-center heart-icon ${isFavorite ? 'active' : ''}`}
                                style={{ background: isFavorite ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.1)" }}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill={isFavorite ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ color: isFavorite ? "#ef4444" : "white" }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-6">
                <div className="animate-fade-in">
                    {/* Hymn Title Card */}
                    <div
                        className="p-6 rounded-xl mb-6"
                        style={{ background: "var(--surface)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    >
                        <div className="flex items-start gap-4">
                            <span
                                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                                style={{ background: "var(--primary)" }}
                            >
                                {hymn.id}
                            </span>
                            <div>
                                <h1 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                                    {hymn.title}
                                </h1>
                                <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                                    {hymn.author} {hymn.year && `(${hymn.year})`}
                                </p>
                                {category && (
                                    <Link href={`/category/${category.id}`} className="category-badge hover:opacity-80 transition-opacity">
                                        {category.name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Lyrics */}
                    <div
                        className="p-6 rounded-xl"
                        style={{ background: "var(--surface)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    >
                        <div
                            className="hymn-lyrics"
                            style={{
                                fontSize: `${fontSize}px`,
                                color: "var(--text-primary)"
                            }}
                        >
                            {hymn.lyrics.split('\n\n').map((section, index) => {
                                const isRefrain = section.toLowerCase().startsWith('refrain:') ||
                                    section.toLowerCase().startsWith('chorus:');
                                // Standardize label to "Chorus:"
                                const displaySection = section
                                    .replace(/^Refrain:/i, 'Chorus:')
                                    .replace(/^refrain:/i, 'Chorus:');
                                return (
                                    <div
                                        key={index}
                                        className={`mb-6 ${isRefrain ? 'pl-4 border-l-4 italic' : ''}`}
                                        style={isRefrain ? {
                                            borderColor: 'var(--accent)',
                                            background: 'rgba(201, 162, 39, 0.08)',
                                            padding: '1rem',
                                            paddingLeft: '1.25rem',
                                            borderRadius: '0 0.5rem 0.5rem 0',
                                            marginLeft: '0.5rem'
                                        } : {}}
                                    >
                                        {displaySection.split('\n').map((line, lineIndex) => (
                                            <div key={lineIndex} style={{ minHeight: '1.5em' }}>
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    {/* Navigation */}
                    <div className="flex justify-between mt-6">
                        {hymnId > 1 && (
                            <Link
                                href={`/hymn/${hymnId - 1}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                                style={{ background: "var(--surface)", color: "var(--primary)" }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </Link>
                        )}
                        {hymnId < 75 && (
                            <Link
                                href={`/hymn/${hymnId + 1}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg ml-auto"
                                style={{ background: "var(--surface)", color: "var(--primary)" }}
                            >
                                Next
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
