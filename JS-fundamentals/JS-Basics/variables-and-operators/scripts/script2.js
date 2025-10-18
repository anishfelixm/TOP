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

console.log(`Is 5 greater than 4: ${5 > 4}`);
const comp = 'Z' > 'A';
console.log(`Is Z > A : ${comp}`);
console.log("null === undefined : " + (null === undefined));

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' );
}

console.log(undefined || null || 0); // undefined truth value is false, null truth value is false, 0 is false and the value is returned as 0 of this expression bcz it's the last operand.
true || console.log("not printed");
false || console.log("printed");
console.log( null || 2 && 3 || 4 ); // chain of OR will return ffirst truthy value. but due to && precedence higher 2&&3 is first calculated which returns 3 following the chaining of &&. then the chaining of OR is calculated which returns 3 as it's the first truthy value.


let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;