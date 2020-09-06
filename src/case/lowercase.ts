/**
 * Transforms text to uppercase
 * @param text input text
 * @returns uppercase string
 */
export default function lowercase(text: string) {
  if (!text) {
    return '';
  }
  return text.toLocaleLowerCase();
}
