//immediately-invoked function expressions

(function() {

    let message = "Hello There";
    console.log(message); // Hello
  })();
//https://javascript.info/var
//Here a Function Expression is created and immediately called.
//So the code executes right away and has its own private variables.
//the parentheses around the function is a trick to show JavaScript 
//that the function is created in the context of another expression,
//and hence it’s a Function Expression: it needs no name and can be called immediately.

// Ways to create IIFE
(function() {
    console.log("Parentheses around the function");
})();
  
(function() {
    console.log("Parentheses around the whole thing");
}());
  
!function() {
    console.log("Bitwise NOT operator starts the expression");
}();
  
+function() {
    console.log("Unary plus starts the expression");
}();