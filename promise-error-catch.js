//Does this error inside setTimeout will be handle by catch?

new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(err => console.log("Catch is running"));