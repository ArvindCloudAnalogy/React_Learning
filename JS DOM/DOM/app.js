let para1 = document.createElement("p");
para1.textContent = "Hey i'm a red!";
document.querySelector('body').appendChild(para1);

para1.classList.add("red");

let h2 = document.createElement('h2');
h2.innerHTML = "<h2>I'm a blue heading!</h2>";
document.querySelector('body').appendChild(h2);

h2.classList.add('blue');

let div1 = document.createElement('div');
div1.classList.add('divClass');
document.querySelector('body').appendChild(div1);

let h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div1.appendChild(h1);

let para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div1.appendChild(para2);
