try{
    setTimeout(function(){
        console.log("This is a scheduled function");
        lalalala;
    })
}catch(err){
    console("Try catch does not catch error in scheduled function");
}