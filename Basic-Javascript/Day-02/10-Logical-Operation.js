// Logical Operation in Javascript

// There are Three Types of Logical Operators

/*
1) Logical AND &&
2) Logical OR ||
3) Logical NOT !
*/

// let Comparison1 = 10;
// let Comparison2 = 20;
// let Comparison3 = 10;
// let Comparison4 = "20";
// let Comparison5 = "10";

// 1) Logical AND Operations
console.log("Logical AND : (10 == 10) && (10 != 20)",(Comparison1 == Comparison3) && (Comparison1 != Comparison2)); // 1 && 1 = 1
console.log("Logical AND : (10 >= 10) && (10 > 20)",(Comparison1 >= Comparison3) && (Comparison1 > Comparison2)); // 1 && 0 = 0
console.log("Logical AND : (10 === '10') && (10 !== 20)",(Comparison1 === Comparison5) && (Comparison1 !== Comparison2)); // 0 && 1 = 0
console.log("Logical AND : (20 <= 10) && (10 >= 20)",(Comparison2 <= Comparison1) && (Comparison1 >= Comparison2)); // 0 && 0 = 0

// 2) Logical OR Operations
console.log("Logical OR : (10 == 10) || (10 != 20)",(Comparison1 == Comparison3) || (Comparison1 != Comparison2)); // 1 && 1 = 1
console.log("Logical OR : (10 >= 10) || (10 > 20)",(Comparison1 >= Comparison3) || (Comparison1 > Comparison2)); // 1 && 0 = 1
console.log("Logical OR : (10 === '10') || (10 !== 20)",(Comparison1 === Comparison5) || (Comparison1 !== Comparison2)); // 0 && 1 = 1
console.log("Logical OR : (20 <= 10) || (10 >= 20)",(Comparison2 <= Comparison1) || (Comparison1 >= Comparison2)); // 0 && 0 = 0

// 3) Logical NOT Operations
console.log("Logical NOT : !(10 == 10)",!(Comparison1 == Comparison3)); // 1  ->  0
console.log("Logical NOT : !(10 >= 20)",!(Comparison1 >= Comparison2)); // 0  ->  1
