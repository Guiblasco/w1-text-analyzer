export function countParagraphs(text: string): number {
  const paragraphs = text
    .split(/\n\s*/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
  return paragraphs;
}
