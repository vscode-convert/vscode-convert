/**
 * @class String converter class
 */
export class StringConverter {

  /**
   * Transforms text to uppercase
   * @param text input text
   * @returns uppercase string
   */
  toUpperCase(text: string) {
    if (!text) {
      return '';
    }
    return text.toLocaleUpperCase();
  }

  /**
   * Transforms text to lowercase
   * @param text input text
   * @returns lowercase string
   */
  toLowerCase(text: string) {
    if (!text) {
      return '';
    }
    return text.toLocaleLowerCase();
  }
}

export type ConverterFunction = (text: string) => string;

export default new StringConverter();