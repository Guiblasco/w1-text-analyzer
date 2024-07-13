import { isPalindrome } from "../../analytics/index.js";

const test1 = (): void => {
  console.log("\nshould returns false if fuction empty string is given");

  const phrase = "";
  const possiblePalindrome = isPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log("\nshould returns true if one word is palindrome is given");

  const phrase = "racecar";
  const possiblePalindrome = isPalindrome(phrase);
  const expectedResult = "Is Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test3 = (): void => {
  console.log("\nshould returns false if one word is not palindrome is given");

  const phrase = "hola";
  const possiblePalindrome = isPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test4 = (): void => {
  console.log(
    "\nshould returns false if one phrase is not palindrome is given"
  );

  const phrase = "hola que tal";
  const possiblePalindrome = isPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test5 = (): void => {
  console.log("\nshould returns true if one phrase is palindrome is given");

  const phrase = "anita lava la tina";
  const possiblePalindrome = isPalindrome(phrase);
  const expectedResult = "Is gitPalindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();
test3();
test4();
test5();
