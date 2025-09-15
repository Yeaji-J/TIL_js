const iconSet = document.querySelectorAll('.contents > .icons > a')
console.log(iconSet);
/* iconSet[0].addEventListener('click',function(e){
    e.preventDefault()
    console.log(this)
    return this.children[0].src = "./images/like_on.png"
})
function likeOnFunc (e){
    e.preventDefault()
    return iconSet[0].children[0].src = "./images/like_on.png"
}
iconSet[1].addEventListener('click',commentOnFunc)
function commentOnFunc (){
    return iconSet[1].children[0].src = "./images/comment_on.png"
}
iconSet[2].addEventListener('click',shareOnFunc)
function shareOnFunc (){
    return iconSet[2].children[0].src = "./images/paper_on.png"
} */

iconSet[0].addEventListener('click',function(e){
    e.preventDefault()
    iconChange(this, 'like')})
iconSet[1].addEventListener('click',function(e){
    e.preventDefault()
    iconChange(this, 'comment')})
iconSet[2].addEventListener('click',function(e){
    e.preventDefault()
    iconChange(this, 'paper')})
function iconChange(target, name){
    return target.children[0].src = `./images/${name}_on.png`
}
/* iconSet[0].addEventListener('click',iconChange(0,'like'))
iconSet[1].addEventListener('click',iconChange(1,'comment'))
iconSet[2].addEventListener('click',iconChange(2,'paper'))
function iconChange(index, name, e){
    return function(e) {
        e.preventDefault()
        iconSet[index].children[0].src = `./images/${name}_on.png`
    }
} */

//사진 클릭 시 스피커 모양 보이기 (+애니메이션)
const instaPhoto = document.querySelector('.photo')
const volumeIcon = document.querySelector('#popup')
console.log(instaPhoto, volumeIcon)
volumeIcon.style.transition = 'opacity 1s'
instaPhoto.addEventListener('dblclick',()=>{
    volumeIcon.style.opacity = 1;
})
instaPhoto.addEventListener('mouseout',()=>{
    volumeIcon.style.opacity = 0;
})