// else if ladder Statement 

mode = "pink"
if (mode === "dark") {
    color = "black";
} else if(mode === "light") {
    color = "white";
} else if(mode === "pink"){
    color = "pink";
} else if(mode === "blue"){
    color = "blue";
} else {
    color = "default";
}
console.log("Background Color :",color);