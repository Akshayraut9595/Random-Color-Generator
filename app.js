let btn = document.querySelector('button');

btn.addEventListener("click" , function () {
    let h3 =document.querySelector('h3');
    let randomcolor = randomColor();
    h3.innerText = randomcolor;
    console.log("Color updated");

    let div = document.querySelector('div');

    div.style.backgroundColor = randomcolor;

});
function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;
    return color;
}
