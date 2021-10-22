/**
 * Transforms camelcase to snakecase
 * @param text input camelcase string
 * @return snakecase string
 */
export default function camelCaseToSnakeCase(text: string) {
  if (!text){
    return '';
  }
    
  return text.replace(/([A-Z])/g, function($1) {
    return '_' + $1.toLowerCase();
  });
}