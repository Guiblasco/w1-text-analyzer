import { countParagraphs } from "../../analytics/index.js";

const test = (text: string): void => {
  const paragracphsCount = countParagraphs(text);

  if (paragracphsCount === 0) {
    console.log("Test Passed");
    return;
  } else {
    console.log("Test Failed");
    return;
  }
};

const testText = "";
test(testText);
