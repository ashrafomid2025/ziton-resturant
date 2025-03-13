const clic = document.getElementById("clik");
const navm = document.getElementById("navm");
const orderul = document.getElementById("order-ul");
const order = document.getElementById("order");
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