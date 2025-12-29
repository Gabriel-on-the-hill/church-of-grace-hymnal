import { hymns } from './hymns';
import { jesusChristHymns, graceHymns, trustHymns, guidanceHymns, discipleshipHymns, victoryHymns, hopeHymns } from './hymnsData';
import type { Hymn } from './hymns';

// Combine all hymns into a single array
export const allHymns: Hymn[] = [
    ...hymns,
    ...jesusChristHymns,
    ...graceHymns,
    ...trustHymns,
    ...guidanceHymns,
    ...discipleshipHymns,
    ...victoryHymns,
    ...hopeHymns
];

// Re-export types and categories
export { categories, type Hymn, type Category } from './hymns';

// Helper functions
export function getHymnById(id: number): Hymn | undefined {
    return allHymns.find(h => h.id === id);
}

export function getHymnsByCategory(categoryId: number): Hymn[] {
    return allHymns.filter(h => h.categoryId === categoryId);
}

// Extract the first line of lyrics (after verse number)
export function getFirstLine(lyrics: string): string {
    const lines = lyrics.split('\n').filter(line => line.trim());
    if (lines.length > 0) {
        // Remove verse number prefix like "1. " or "1 "
        return lines[0].replace(/^\d+\.\s*/, '').trim();
    }
    return '';
}

// Enhanced search: searches title, author, first line, and full lyrics
// Prioritizes matches by: 1) ID, 2) Title, 3) First Line, 4) Author, 5) Other lyrics
export function searchHymns(query: string): Hymn[] {
    const lowerQuery = query.toLowerCase().trim();

    if (!lowerQuery) return [];

    // Categorize matches by priority
    const exactIdMatch: Hymn[] = [];
    const titleMatches: Hymn[] = [];
    const firstLineMatches: Hymn[] = [];
    const authorMatches: Hymn[] = [];
    const lyricsMatches: Hymn[] = [];

    allHymns.forEach(hymn => {
        const firstLine = getFirstLine(hymn.lyrics).toLowerCase();

        if (hymn.id.toString() === lowerQuery) {
            exactIdMatch.push(hymn);
        } else if (hymn.title.toLowerCase().includes(lowerQuery)) {
            titleMatches.push(hymn);
        } else if (firstLine.includes(lowerQuery)) {
            firstLineMatches.push(hymn);
        } else if (hymn.author.toLowerCase().includes(lowerQuery)) {
            authorMatches.push(hymn);
        } else if (hymn.lyrics.toLowerCase().includes(lowerQuery)) {
            lyricsMatches.push(hymn);
        }
    });

    // Return results in priority order
    return [...exactIdMatch, ...titleMatches, ...firstLineMatches, ...authorMatches, ...lyricsMatches];
}

