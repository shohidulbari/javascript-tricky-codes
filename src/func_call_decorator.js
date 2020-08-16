let worker = {
    someMethod(){
        return 1;
    },
    slow(x){
        console.log("Called with " + x);
        return x * this.someMethod();
    }
};

function cachingDecorator(func){
    let cache = new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }
        let result = func.call(this, 2); //Passing with context
        cache.set(x, result);
        return result;
    }
}

worker.slow = cachingDecorator(worker.slow);
worker.slow(2);