const show = (id, plus)=>{
    let p = document.getElementsByClassName(id)[0];
    let add = document.getElementsByClassName(plus)[0];
    
    if(p.style.display == ""){
        p.style.display = "block";
        add.style.transform = "rotate(45deg)"
    }
    else if(p.style.display == "none"){
        p.style.display = "block";
        add.style.transform = "rotate(45deg)"
    }
    else{
        p.style.display = "none";
        add.style.transform = "rotate(90deg)"
    }
}
let email = document.getElementById("head-email");
email.addEventListener('click', ()=>{
    let label = document.getElementsByClassName("email-label")[0].innerHTML = "";
})
