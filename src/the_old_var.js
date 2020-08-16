function outer(){
    function inner(){
        var name = "Shohidul Bari";
    }
    inner();
    console.log(name);
}

outer();

{
    {
        {
            var name = "Shohidul Bari";
        }
    }
}

console.log(name);