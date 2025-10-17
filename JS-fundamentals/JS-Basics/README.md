## Basics

### Variables and operators

Firstly we write the "hello world" program of JS programming. It's a simple console.log("Hello World!"). This will be used in debugging our application and so on. JS files have the extension ".js" To add external JS files, we do \<script src = "path_to_file.js"\>\<\/script\>.

Variables are declared using the "let" keyword. To declare variables whose values can't be changed after initializing we use the "const" keyword \(which stands for "constant"\) i.e. const variable values can't be re-assigned. "var" keyword can also be used but it's no longer used as part of coding habits. "alert" keyword is used to create pop-ups with the alert msg. Technically we can assign values to variables without defining them \(i.e. without using thte let keyword\), but this is a bad praactice and to avoid this happening we need to put this on our script - "use strict"; . In JS numbers are always 64 bit floating point. "NaN" is a JS reserved word pointing to a number that's not legal i.e. Not a Number. "Infinity" or "-Infinity" is a keyword pointing to a number thats outside the largest possible number. Numbers are usually defined as primitiv values from literals, but they can also be defined as objects with "new" keyword. Comparing two JS objects will always return false. JS numbers are of the type "Number". There's another type called "BigInt" also but these are for very very large numbers and not used very often. A string holding a number value can be converted to a number value using the Number() constructor \(this might happen when we get form input as string\). There's also unary plus operator which acts like the Number() constructor i.e. +a and Number(a) do the same thing.

Node.Js is a JS runtime environment to run JS outside the web browser. nvm \(i.e. Node Version Manager\) and npm are two tools we can use to install and manage Node versions and libraries. Installed node latest long-term support version using nvm \(nvm install --lts\). We also need to tell nvm which version of node to use \(nvm use --lts\). npm is installed along with node. We can use "node" to get a console on terminal to edit and test JS code. To exit use the ".exit" command.

There are  8 basic data types in JS. JS is "dynamically typed" i.e. we don't need to mention the data type while creating the variable \(just like in Python\). Data types are:
1. Number
2. BigInt
3. String
4. Boolean
5. null
6. undefined
7. Object
8. Symbol

BigInt numbers are denoted by "n" at the end \(const bigInt = 1234567890123456789012345678901234567890n;\). These are used in cryptography, etc for numbers bigger than +-\(2^53\)-1 which is the largest value held by Number type. Strings are denoted by quotes. they can be double quotes ", single quotes ' or backticks \`. Single and double quotes work the same way but backticks are "extended functionality" quotes. They allow us to embed variables or expressions in strings by wrapping them in ${...} \(like `Hello, ${name}`\). Boolean can have only "true" or "false" as the value. null type is a special value holding nothing \(slightly different than None or nullptr which stand for pointing or reference to a non-existing object\). A variable is of undefined type if it's declared but not assigned any value. Object type is a default type assigned to any object to be created. symbol type is used to create unique identifiers for objects. The "typeof" operator command gives us the type of any variable in JS \(E.g : typeof 10n\).

