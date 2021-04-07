//Classes are registered at the top of the scope
//But if you try to access the class before definition
//JavaScript throws reference error

let sq = new Square(4);
console.log(sq.area());

class Square{
    constructor(x){
        this.x = x;
    }

    area(){
        return this.x * this.x;
    }
}

