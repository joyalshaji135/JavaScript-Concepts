// var variable using datatype
function myFunction1(){
    var var1,var2,sum;
    var1=10;
    var2=70;
    sum=var1+var2;
    document.getElementById("demo1").innerHTML="Total Sum is :"+sum;    
}
// let variable using datatype
function myFunction2()
{
    let num1,num2,num3,sum,average;
    num1=10;
    num2=89;
    num3=56;
    sum=num1+num2+num3;
    average=sum/3;
    document.getElementById("demo2").innerHTML="Average of The Three Numbers :"+average;
}
// not using datatype
function myFunction3()
{
    var1=10;
    var2=30;
    div=var2/var1;
    document.getElementById("demo3").innerHTML="Divided By :"+div;
}
// const datatype using pi value store to const variable
function myFunction4()
{
    const PI=3.14;
    var radius=4;
    let sum=radius*radius;
    let area=PI*sum;
    document.getElementById("demo4").innerHTML="Area of Circle :"+area;
}
// var and let datatype using string storing
function myFunction5()
{
    var data1;
    let data2;
    data1="Hello Joyal Shaji";
    data2="How are you Joyal ?";
    document.getElementById("demo5").innerHTML=data1;
    document.getElementById("demo6").innerHTML=data2;
}

document.getElementById("demo7").innerHTML="Hello World";
document.getElementById("demo8").innerHTML="Hey World";

function myFunction6()
{
    var num1=10,num2=40;
    sum=num1+num2;
    var n1=100,n2=200;
    total=n1+n2;
    document.getElementById("demo9").innerHTML=sum;
    document.getElementById("demo10").innerHTML=total;
}