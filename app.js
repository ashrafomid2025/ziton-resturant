const clic = document.getElementById("clik");
const navm = document.getElementById("navm");
const orderul = document.getElementById("order-ul");
const order = document.getElementById("order");
const service = document.getElementById("service");
const serviceM = document.getElementById("service-m");
const contact = document.getElementById("contact");
const constactM = document.getElementById("contact-m");

const tabletNav = document.getElementById("tabletnav");
const ulMain = document.getElementById("mainUL");
const close = document.getElementById("close");
close.addEventListener("click",()=>{
    ulMain.classList.remove("rightAlign");
    tabletNav.style.display = "block";
    close.style.display = "none";

})

tabletNav.addEventListener("click",()=>{
    ulMain.classList.add("rightAlign");
    tabletNav.style.display = "none";
    close.style.display = "block";
})



contact.addEventListener("click",()=>{
    if(constactM.style.display=="block"){
        constactM.style.display = "none";
    }
    else{
        constactM.style.display = "block"
    }
})
service.addEventListener("click",()=>{
    if(serviceM.style.display =="block"){
        serviceM.style.display = "none"
        
    }
    else{
        serviceM.style.display = "block";
    }
});
// 
clic.addEventListener("click",()=>{
    if(navm.style.display =="block"){
        navm.style.display = "none"
        
    }
    else{
        navm.style.display = "block";
    }
})
order.addEventListener("click", ()=>{
    if(orderul.style.display == "block"){
        orderul.style.display = "none";
    }
    else{
        orderul.style.display = "block"
    }
});