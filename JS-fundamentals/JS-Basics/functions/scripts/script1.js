function helloWorld(name) {
    console.info("Inside funtion body");
    return `Hello, ${name}`;
}

console.log(helloWorld(prompt("Give a name")));

/* Anonymous function - logkey */
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

