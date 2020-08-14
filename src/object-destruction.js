let object = {  };
let { prop = 'default' } = object;
console.log(prop); //default;

object = {prop2 : 'value'};
let { prop2 = 'default' } = object;
console.log(prop2); //value 