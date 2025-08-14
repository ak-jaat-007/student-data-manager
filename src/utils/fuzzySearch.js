// Accent-insensitive normalization
export function normalizeName(s) {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

// Allow ≤1 edit (insert/delete/replace)
function levenshteinOne(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] !== b[j]) {
      if (++edits > 1) return false;
      if (a.length > b.length) i++;
      else if (a.length < b.length) j++;
      else { i++; j++; }
    } else {
      i++; j++;
    }
  }
  return true;
}

export function isFuzzyMatch(query, text) {
  const a = normalizeName(query);
  const b = normalizeName(text);
  return levenshteinOne(a, b);
}
