/**
 * Transforms snakecase to snakecase
 * @param text input snakecase string
 * @return camelcase string
 */
export default function snakeCaseToCamelCase(text: string) {
  if (!text) {
    return '';
  }
    
  return text.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}