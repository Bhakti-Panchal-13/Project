function bodyColor(){
    let redB = Math.floor(Math.random()*255);
    let greenB = Math.floor(Math.random()*255);
    let blueB = Math.floor(Math.random()*255);
    let colorB = `rgb(${redB},${greenB},${blueB})`;
    return colorB;
    }
    let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("generate random color");
    let colour = bodyColor();
    let body = document.querySelector("body");
    body.style.backgroundColor = colour;
})