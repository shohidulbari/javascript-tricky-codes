//Deep Clone

function deepClone(obj){
    let clone = {};

    for(let key in obj){
        if(obj[key] != null && typeof(obj[key]) == "object"){
            clone[key] = deepClone(obj[key]);
        }else{
            clone[key] = obj[key];
        }
    }

    return clone;
}

let student = {
    name : "Shohid",
    id : '14035',
    address: {
        post: 'hemnagar',
        code: '1992'
    }
}

let clone = deepClone(student);

clone.dept = 'ict';

console.log(clone);
console.log(student);