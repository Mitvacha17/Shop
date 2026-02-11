/**
 * Detects if a string contains Lao characters
 * Lao Unicode range: U+0E80 to U+0EFF
 */
export function containsLaoText(text: string): boolean {
  const laoRegex = /[\u0E80-\u0EFF]/;
  return laoRegex.test(text);
}

/**
 * Returns appropriate CSS class based on whether text contains Lao characters
 */
export function getLaoClass(text: string): string {
  return containsLaoText(text) ? "font-lao" : "";
}

/**
 * Returns appropriate lang attribute based on whether text contains Lao characters
 */
export function getLaoLang(text: string): string | undefined {
  return containsLaoText(text) ? "lo" : undefined;
}
