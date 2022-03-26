let btnMenu = document.getElementById('btn-toggle');

btnMenu.addEventListener("click", ()=>{
    let menu = document.getElementById('navbarNavDropdown');
    let btn = document.getElementById('btn-toggle');
    btn.classList.toggle('active');
    menu.classList.toggle('active');
});