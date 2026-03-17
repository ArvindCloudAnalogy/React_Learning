let btn = document.querySelector('button');
console.dir(btn);
// btn.onclick = function (){
//     alert("button is clicked");
// }

function sayHi(){
    alert("Hi")
}
btn.onmouseenter = sayHello;
btn.onclick = sayHi;
function sayHello(){
    alert("Mouse Entered");
}