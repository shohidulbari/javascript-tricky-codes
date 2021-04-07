let user = '{"name" : "Shohidul Bari", "age" : 18}';

try{
    let data = JSON.parse(user);
    console.log(data);
}catch(err){
    console.log(err);
}