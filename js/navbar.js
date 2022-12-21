const hamburger = document.querySelector('.hamburger');
const toggle = document.querySelector(".toggle");
console.log(hamburger)
console.log(toggle)

hamburger.addEventListener('click',()=>{
    if(toggle.style.display === 'none'){
        toggle.style.display = "block";
    }
    else
     toggle.style.display = "none";

     console.log('click');
})