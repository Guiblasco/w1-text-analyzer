import { countParagraphs } from "../../analytics/index.js";

const test1 = (): void => {
  console.log("countParagraph Function case 0");

  const paragraph = "";
  const paragracphsCount = countParagraphs(paragraph);
  const expectedParagraph = 0;

  if (paragracphsCount === expectedParagraph) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
const test2 = (): void => {
  console.log("countParagraph Function case 1");

  const paragraph = "hola esto es un parrafo";
  const paragracphsCount = countParagraphs(paragraph);
  const expectedParagraph = 1;

  if (paragracphsCount === expectedParagraph) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
const test3 = (): void => {
  console.log("countParagraph Function case any");

  const paragraph = `hola estos es un parrafo
  
  hola esto es otro parrafo
  
  y este es otro`;
  const paragracphsCount = countParagraphs(paragraph);
  const expectedParagraph = 3;

  if (paragracphsCount === expectedParagraph) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

test1();
test2();
test3();
