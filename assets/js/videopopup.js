const playbtn = document.querySelector('.playbtn')
const closevideo = document.querySelector('.closevideo')
const closevideodiv = document.querySelector('.closevideodiv')
const closebtndiv = document.querySelector('.closebtndiv')
const videopoup = document.querySelector('.videopoup')

playbtn.addEventListener('click' , (e) => {
    videopoup.classList.add('active')
})
closevideo.addEventListener('click' , (e) => {
    videopoup.classList.remove('active')
})
closevideodiv.addEventListener('click' , (e) => {
    videopoup.classList.remove('active')
})
closebtndiv.addEventListener('click' , (e) => {
    videopoup.classList.remove('active')
})