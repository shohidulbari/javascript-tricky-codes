function hoist() {
    console.log(myString); // => undefined
    var myString = 'Hello World';
    console.log(myString); // => 'Hello World'
  }
hoist();