function test(text: string): number {
  console.log("Function countParagraphs");
  const countParagraphs = text
    .split(/\n\s*/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
  switch (countParagraphs) {
    case 0:
      console.log("Texto vacio");
      return 0;
    case 1:
      console.log("Texto con 1 sola línea");
      return 1;
    default:
      console.log(`El texto contiene ${countParagraphs} párrafos`);
      return countParagraphs;
  }
}
