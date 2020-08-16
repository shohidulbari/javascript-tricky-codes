function func(){
    this.age = 25;
    console.log(this);
    function inner(){
        this.age = 26;
        console.log(this);
    }
    inner();
    console.log("After calling... ", age);
}

func();
console.log("Global: ", globalThis);