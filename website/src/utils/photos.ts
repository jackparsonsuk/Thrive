export interface Photo {
    path: string;
    url: string;
    alt: string;
}

// Proper nouns keep their capitals wherever they land in a filename.
const properNouns = /\b(thrive|collective|exeter)\b/gi;

// Turn "01_squat-rack.jpg" into "Squat rack" for the alt text.
const toAlt = (path: string) => {
    const name = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
    const words = name.replace(/^[\d\s_-]+/, '').replace(/[_-]+/g, ' ').trim();
    if (!words) return 'Thrive Collective, Exeter';
    const sentence = words.charAt(0).toUpperCase() + words.slice(1);
    return sentence.replace(properNouns, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

// Build a sorted photo list from an import.meta.glob result (eager, ?url).
export const photosFromGlob = (modules: Record<string, string>): Photo[] =>
    Object.keys(modules)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
        .map((path) => ({ path, url: modules[path], alt: toAlt(path) }));
