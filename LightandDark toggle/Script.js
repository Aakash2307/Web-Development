const toggle = document.getElementById("darkmode-toggle");
const background = document.querySelector('.background');

toggle.addEventListener('change' , () =>{
    document.body.classList.toggle('dark-mode' , toggle.checked);
});