console.log(1);
setTimeout(() => {
    console.log(2);
}, 0)

Promise.resolve(3).then(console.log);
console.log(4);