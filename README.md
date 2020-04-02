#W1D4 - Callbacks

## Content

- First-class Objects (First-class citizen)
- Function declaration vs function expressions
- Higher-Order Functions
- Callbacks
  - Single Responsability Principle

[Quotes](./quote)

## Michael Jordon

> “I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.”
> ― Michael Jordan

## Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.

## Functions as First-Class Objects (First-class citizen)

- A function can be treated like any other value in JS
- It can be assigned to a variable
- It can be passed as an argument
- It can returned by another function

### Assigning a function to a variable

```js
const log = console.log;
log('Hello');
```

### An example of an anonymous function

```js
const getCharacter = function() {
  const characters = ['Froddo', 'Sam', 'Merry', 'Peppin'];
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
};
```

## Differences between function declarations and function expressions

- Function declarations and function expressions provide the same functionality
- The main difference that we need to be aware of

  - The body of function declarations are hoisted contrary to function expressions
  - Hence function expressions cannot be called before their declaration

## Higher-Order Functions

- A function that accepts another function as input parameters or return another function

## Callbacks

We played with these files:

- [first_class_objects.js](./first_class_objects.js)
- [callback.js](./callback.js)
- [movies.js](./movies.js)
