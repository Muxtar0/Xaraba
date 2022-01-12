const filterbtns = document.querySelector('.projects .filtercategories ul');
const items = document.querySelectorAll('.projects .itemsdiv .item');

filterbtns.addEventListener('click' , (e) => {
    for(let i = 0 ; i<items.length;i++){
        items[i].classList.add('disabled')
    }
    for(let i = 0 ; i < items.length ; i++){
        if(e.target.getAttribute("data-target") == items[i].getAttribute('data-kind')){
            items[i].classList.remove('disabled')
        }
    }
})