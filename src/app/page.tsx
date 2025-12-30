"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, allHymns, searchHymns, getFirstLine } from "@/data";
import DoveIcon from "@/components/DoveIcon";
import ThemeToggle from "@/components/ThemeToggle";



export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allHymns>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setIsSearching(true);
      setSearchResults(searchHymns(query));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 px-4 py-6 shadow-lg"
        style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="relative flex flex-col items-center justify-center text-center mb-6 pt-2">
            <div className="flex flex-col items-center gap-3 w-full px-10">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 shadow-lg backdrop-blur-sm">
                <DoveIcon className="w-9 h-9" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white uppercase leading-snug tracking-wide drop-shadow-md">
                Church of Grace Selected Hymns of Worship
              </h1>
            </div>

            {/* Dark Mode Toggle */}
            <div className="absolute right-0 top-0">
              <ThemeToggle />
            </div>
          </div>



          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search hymns by title, number, or lyrics..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2"
              style={{ background: "var(--surface)", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "var(--text-muted)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {isSearching ? (
          /* Search Results */
          <div className="animate-fade-in">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
            </h2>
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((hymn) => (
                  <Link
                    key={hymn.id}
                    href={`/hymn/${hymn.id}`}
                    className="block p-4 rounded-xl card-hover"
                    style={{ background: "var(--surface)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
                  >
                    <div className="flex items-start gap-3">
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
                        <p className="text-sm italic truncate mt-1" style={{ color: "var(--text-secondary)" }}>
                          &ldquo;{getFirstLine(hymn.lyrics)}&rdquo;
                        </p>
                        <span className="category-badge mt-2 inline-block">
                          {hymn.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)" }}>No hymns found. Try a different search term.</p>
            )}
          </div>
        ) : (
          /* Categories */
          <div className="animate-fade-in">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
              Browse by Category
            </h2>
            <div className="grid gap-4">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="block p-5 rounded-xl card-hover"
                  style={{
                    background: "var(--surface)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)`,
                        }}
                      >
                        <span className="text-white font-bold">{category.id}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                          {category.name}
                        </h3>
                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                          {category.hymnCount} hymn{category.hymnCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5"
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

            {/* Quick Access */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
                Quick Access
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/favorites"
                  className="p-4 rounded-xl text-center card-hover"
                  style={{ background: "var(--surface)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>Favorites</span>
                </Link>
                <Link
                  href="/all"
                  className="p-4 rounded-xl text-center card-hover"
                  style={{ background: "var(--surface)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>All Hymns</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 mt-8" style={{ color: "var(--text-muted)" }}>
        <p className="text-sm">75 Hymns • Church of Grace</p>
      </footer>
    </div>
  );
}
