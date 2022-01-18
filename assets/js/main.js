const hamburgermenubtn = document.querySelector('.hamburgermenubtn');
const mobileopenmenu = document.querySelector('.mobileopenmenu');
const header = document.querySelector('header');

hamburgermenubtn.addEventListener('click', (e) => {
    hamburgermenubtn.classList.toggle('is-active');
    mobileopenmenu.classList.toggle('active')
    setTimeout(() => {
        header.classList.toggle('active') 
    }, 300);
})
