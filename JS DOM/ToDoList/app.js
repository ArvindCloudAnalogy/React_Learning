let btn= document.querySelector("button");

let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener("click",(event)=>{

    let delbtn = document.createElement('button');
    delbtn.innerText  = "Delete";
    delbtn.classList.add("delete");

  
    let item = document.createElement('li');
    item.innerText = input.value;
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener('click',function(event){

    if(event.target.nodeName =="BUTTON"){
        let listName = event.target.parentElement;
        listName.remove();

    }


});

