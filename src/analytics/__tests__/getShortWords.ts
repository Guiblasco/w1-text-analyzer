import { getShortWords } from "../../analytics/index.js";

const test1 = (): void => {
  console.log("getShortWords function case 0");

  const shortWord = "";
  const shortWordsCount = getShortWords(shortWord);
  const expectedShortWord = 0;

  if (shortWordsCount === expectedShortWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

const test2 = (): void => {
  console.log("getShortWords function case 2");

  const shortWord = "hola como estas giliiii";
  const shortWordsCount = getShortWords(shortWord);
  const expectedShortWord = 2;

  if (shortWordsCount === expectedShortWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

test1();
test2();
