//Rest Parameters and for-of loop

function func(...args){
    for(let arg of args){
        console.log(arg);
    }
}

func(1, 2);
func("rahim", "karim", "selim", "kalam", "badol");
