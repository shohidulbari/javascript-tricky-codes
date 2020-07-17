function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
console.log(typeof a); //undefined
console.log(typeof b); //number

//variable b is declared neither in the foo() scope or global scope. 
//So JavaScript interprets b = 0 expression as window.b = 0
//In other words, b is a global variable created accidentally.
//In a browser, the above code snippet is equivalent to:

function foo() {
    let a;
    window.b = 0;
    a = window.b;
    a++;
    return a;
}