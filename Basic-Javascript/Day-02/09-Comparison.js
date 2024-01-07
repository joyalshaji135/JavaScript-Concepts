// Comparison Operation In Javascript

let Comparison1 = 10;
let Comparison2 = 20;
let Comparison3 = 10;
let Comparison4 = "20";
let Comparison5 = "10";
// == Equal to
console.log("Equal to type 10 == 20",Comparison1 == Comparison2);
console.log("Equal to type 10 == 10",Comparison1 == Comparison3);
console.log("Equal to type 10 == '20'",Comparison1 == Comparison4); // String Literal is Converted into Integer
console.log("Equal to type 10 == '10'",Comparison1 == Comparison5); 

// != Not Equal to
console.log("Not Equal to type 10 != 10",Comparison1 != Comparison3);
console.log("Not Equal to type 10 != 20",Comparison1 != Comparison2);
console.log("Not Equal to type 10 != '20'",Comparison1 != Comparison4); // String Literal is Converted into Integer
console.log("Not Equal to type 10 != '10'",Comparison1 != Comparison5); 

// === Equal to or (Type)
console.log("Equal to or (Type) 10 === 10",Comparison1 === Comparison3)
console.log("Equal to or (Type) 10 === 20",Comparison1 === Comparison2)
console.log("Equal to or (Type) 10 === '10'",Comparison1 === Comparison5); // It Check for Datatype First and Stricktly Check
console.log("Equal to or (Type) 10 === '20'",Comparison1 === Comparison4);

// !== Not Equal to or (Type)
console.log("Equal to or (Type) 10 !== 10",Comparison1 !== Comparison3)
console.log("Equal to or (Type) 10 !== 20",Comparison1 !== Comparison2)
console.log("Equal to or (Type) 10 !== '10'",Comparison1 !== Comparison5); // It Check for Datatype First and Stricktly Check
console.log("Equal to or (Type) 10 !== '20'",Comparison1 !== Comparison4);

// < Less Than
console.log("Less Than 10 < 10",Comparison1 < Comparison3);
console.log("Less Than 10 < 20",Comparison1 < Comparison2);
console.log("Less Than 10 < '20'",Comparison1 < Comparison4);

// <= Less than or Equal to
console.log("Less than or Equal to 10 <= 10",Comparison1 <= Comparison3);
console.log("Less than or Equal to 10 <= 20",Comparison1 <= Comparison2);
console.log("Less than or Equal to 10 <= '20'",Comparison1 <= Comparison4);

// > Greater Than
console.log("Greater Than 10 > 10",Comparison1 > Comparison3);
console.log("Greater Than 20 > 10",Comparison2 > Comparison1);
console.log("Greater Than 10 > '20'",Comparison1 > Comparison4);

// >= Greater than or Equal to
console.log("Greater Than or Equal to 10 >= 10",Comparison1 >= Comparison3);
console.log("Greater Than or Equal to 20 >= 10",Comparison2 >= Comparison1);
console.log("Greater Than or Equal to 10 >= '20'",Comparison1 >= Comparison4);