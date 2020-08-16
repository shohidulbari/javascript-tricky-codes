function f() {
    let value = Math.random();
  
    function g() {
      debugger; // in console: type alert(value); No such variable!
    }
  
    return g;
  }
  
  let g = f();
  g();