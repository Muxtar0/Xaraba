const filterbtns = document.querySelector('.projects .filtercategories ul');
const items = document.querySelectorAll('.projects .itemsdiv .item');
let direct = true;
filterbtns.addEventListener('click' , (e) => {
    for(let i = 0 ; i<items.length;i++){
        items[i].classList.add('disabled')
        items[i].classList.remove('disabledmain')
    }
    if(direct == true){
        for(let i = 0 ; i < items.length ; i++){
            if(e.target.getAttribute("data-target") == items[i].getAttribute('data-kind')){
                items[i].classList.remove('disabled')
    
            }
            if(e.target.getAttribute("data-target") != items[i].getAttribute('data-kind')){
                setTimeout(() => {
                    items[i].classList.add('disabledmain')
                }, 300);
            }
        }
        direct = false;
    }
    else{
        setTimeout(() => {
            for(let i = 0 ; i < items.length ; i++){
                if(e.target.getAttribute("data-target") != items[i].getAttribute('data-kind')){
                    setTimeout(() => {
                        items[i].classList.add('disabledmain')
                    }, 100);
                }
                if(e.target.getAttribute("data-target") == items[i].getAttribute('data-kind')){
                    items[i].classList.remove('disabled')
        
                }
            }
        }, 500);
    }
})