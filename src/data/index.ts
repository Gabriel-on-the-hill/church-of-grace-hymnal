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

export function searchHymns(query: string): Hymn[] {
    const lowerQuery = query.toLowerCase();
    return allHymns.filter(h =>
        h.title.toLowerCase().includes(lowerQuery) ||
        h.author.toLowerCase().includes(lowerQuery) ||
        h.lyrics.toLowerCase().includes(lowerQuery) ||
        h.id.toString() === query
    );
}
