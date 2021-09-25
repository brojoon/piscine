export default function helloSomeone(x) {
  if (typeof x === "string") {
    if (x === "") console.log("Who are you?");
    else console.log(`Hello ${x}!`);
  }
  else if (x === null) console.log("I am null and void");
  else if (typeof x === "number") {
    if (x <= 0) console.log("I am Benjamin Button!");
    else if (isNaN(x)) console.log("Age is just a number");
    else console.log(`My age is ${x}`);
  }  
  else if (typeof x === "undefined") console.log("Nobody can defin e me!");
}