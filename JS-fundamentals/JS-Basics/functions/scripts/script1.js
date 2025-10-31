function helloWorld(name) {
    console.info("Inside funtion body");
    return `Hello, ${name}`;
}

console.log(helloWorld(prompt("Give a name")));