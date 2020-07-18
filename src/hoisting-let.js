function isTruthy(value) {
    var myVariable = 'Value 1';
    if (value) {
      /**
       * temporal dead zone for myVariable
       */
      // Throws ReferenceError: myVariable is not defined
      console.log(myVariable);
      let myVariable = 'Value 2';
      // end of temporary dead zone for myVariable
      console.log(myVariable); // => 'Value 2'
      return true;
    }
    return false;
  }
  isTruthy(1); // => true