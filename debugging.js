var greeting = "Hi!";

console.log(console.log(greeting));
debugger;

// hoisting
function newGreeting(greetingValue){
  debugger;
  var greeting = greetingValue;
  console.log(greeting);
}

debugger;
newGreeting("Hello, World!");