{
    let outerScope = "This is outer scope";
    {
        let innerScope = "This is inner scope";
        console.log("Access outerScope from innerScope..." + outerScope); //Okay
    }
    console.log("Access innerScope form outerScope..." + innerScope); //ReferenceError
}