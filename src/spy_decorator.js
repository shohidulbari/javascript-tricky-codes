function work(a, b){
    console.log("Inside Works... ", a);
    console.log(a + b);
}

function spy(func){
    function wrapper(...args){
        console.log(args);
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

console.log(work.calls);

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}