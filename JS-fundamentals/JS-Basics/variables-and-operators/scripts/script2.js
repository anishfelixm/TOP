const name = "Anish";
let greeting = `Hello ${name}`;
console.log(greeting);

let greeting1 = "Hello", greeting2 = "How are you";
console.log(greeting1 + ", " + greeting2);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

let word = "Hello world";
console.log(word.length);
console.log(`word at position 3: ${word.charAt(2)}`);
console.log("word at last but one position: " +  word.at(-1));
console.log("word at position 2: " + word[1]);
console.log("substring[-2,-3]: " + word.slice(-2,-3));
console.log("substring[2, end]: " + word.substr(1));
console.log("in uppercase: " + word.toUpperCase());
word.replace("world", "WoRlD");
console.log(word);
let newWord = "hello, world";
newWord.split(",");