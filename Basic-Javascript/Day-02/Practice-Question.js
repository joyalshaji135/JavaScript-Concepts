// Get User to input a number using prompt("Enter a Number"). Check if the Number is a Multiple of 5 or not 

let CheckNumber;
CheckNumber = prompt("Enter the Number :");

if (CheckNumber % 5 == 0) {
    console.log("It is a Multiple of 5 :",CheckNumber);
}else{
    console.log("It is not Multiple of 5 :",CheckNumber);
}