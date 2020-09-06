/**
 * Transforms text to uppercase
 * @param text input text
 * @returns uppercase string
 */
export default function uppercase(text: string) {
  if (!text) {
    return '';
  }
  return text.toLocaleUpperCase();
}
