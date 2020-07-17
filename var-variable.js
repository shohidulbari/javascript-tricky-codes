//Case: 1
if(true){
    var msg = "var lives outside the block";
}
console.log("Case 1: " + msg); //msg variable lives outside block.
// Description: var ignores the code blocks. we have got a global variable "msg"

//Case: 2
for(var i=0; i<100; i++){

}
console.log("Case 2: " + i); //i variable lives after for loops.

//Case: 3
function sample(){
    if(true){
        var innerMsg = "This block is inside function"
    }
    console.log("Case 3: "+ innerMsg);
}
sample();
try{
    console.log("Case 3.1: Outside function var visibility"+ innerMsg); //ReferenceError
}catch(err){
    console.log("Case 3.1: "+ err.name)
}
//If a code block is inside a function, then var becomes a function-level variable.

//Case: 4
var name = "shohidul bari";
var name = "ritoo";
console.log("Case 4: value of the variable name: ", name);
//var tolerates redeclarations
//we can redeclare a variable any number of times. If we use var with an already-declared variable, 
//it’s just ignored.

