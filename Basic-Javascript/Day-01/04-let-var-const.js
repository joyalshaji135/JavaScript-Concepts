// var --- variable can be redeclare or update. A global scope variable
// let --- variable cannot be redeclare or can be update. A block scope variable
// const --- variable cannot be redeclare or update. A block scope variable

// VAR

var NameStudent = "Sreemayi CM";
console.log(NameStudent);

var NameStudent = "Pooja Mol";
console.log(NameStudent);


// LET

let StudentAge = 22;
console.log(StudentAge);

// let StudentAge = 23; ==> It is an error variable cannot be redeclare

StudentAge = 23; // Change the Variable Values

console.log(StudentAge);

let isFollow = true;

if(isFollow!=true)
{
    
}
else
{
    console.log("Student is Follow\t"+isFollow);
}

isFollow = false;

console.log(isFollow);

// CONST

const PI = 3.14;

// PI = 23; it variable cannot be redeclare and update

console.log(PI);

const G =9.8;

console.log(G);

// Global Scope Variable Declaration in Javascript in Above Examples

// Block Scope Variable Declaration in Javascript 

{
    let LinkedinName = "Sreekanth";
    let LinkedinUserAge = 24;
    console.log(LinkedinName);
    console.log(LinkedinUserAge);
}

{
    let LinkedinName = "Sangeeth"
    LinkedinUserAge = 34; // Update the Variable in Block Scope
    console.log(LinkedinUserAge);
    console.log(LinkedinName);
}

{
    const Status = true;
    console.log(Status);
}

{
    Status = false;
    console.log(Status);
}