console.log("This is JS")
// var age = 24;
// var myName = "Muath \n";
// console.log(myName,age)
// console.log(myName.toUpperCase())
// console.log(myName.charAt(0));
// console.log(myName.indexOf("T"));

// var longSt = "This is a ver long";
// var Checkincl = longSt.includes("i");
// console.log("Is it?", Checkincl);

var ToBeEval = "false";

var Value = eval(ToBeEval);

if (typeof Value === "string") 
{
    var lastChar = Value.charAt(Value.length-1);
console.log(lastChar);
}
else if(isNaN(Value))
    console.log("I cannot proceed!");
else if(!isNaN(Value))
{
Value *=3;
console.log(Value);
}

else 
console.log(Value);
