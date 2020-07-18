function outerFunc() {
    let outerVar = 'I am outside!';
  
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
  
    return innerFunc;
  }
  
  const myInnerFunc = outerFunc();
  myInnerFunc();
  //will "outerVar" accesible outside the lexical scope?... yes... this is for closures
  //https://dmitripavlutin.com/simple-explanation-of-javascript-closures/