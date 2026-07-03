document.addEventListener("DOMContentLoaded", function(){

const button=document.getElementById("theme-toggle");

if(!button) return;

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

button.innerHTML="☀️";

}

button.addEventListener("click",function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

button.innerHTML="☀️";

localStorage.setItem("theme","dark");

}else{

button.innerHTML="🌙";

localStorage.setItem("theme","light");

}

});

});