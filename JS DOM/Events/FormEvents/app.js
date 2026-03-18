

let form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 


    //let user = form.elements[0];
    let user = this.elements[0];
    let pass = this.elements[1];
    //let pass = form.elements[1];

    alert(`Hi ${user.value} your password is set to ${pass.value}`)




});