const filterButtons=document.querySelectorAll(".filter-btn");

const cards=document.querySelectorAll(".tool-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all" || card.dataset.category===filter){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});