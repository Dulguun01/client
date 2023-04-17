export function cutTextToLength(str: string, maxLength: number) {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}
