// For in Looping Statement in Javascript

let CollegeStudent = {
    Name : "Joyal Shaji",
    Age : 23,
    Cgpc : 7.2,
    Ispass : true 
};

console.log(CollegeStudent);

for (let key in CollegeStudent) {
    console.log("Key = ",key,"Key Values = ",CollegeStudent[key]);
}