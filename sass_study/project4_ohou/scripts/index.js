const priceInfoPopUp = document.querySelector('#info')
const infoIcon = document.querySelector('.price_info > a')
console.log(priceInfoPopUp, infoIcon)
infoIcon.addEventListener('click',(e)=>{
    e.preventDefault()
    priceInfoPopUp.style.display = 'inline-block';
    console.log(priceInfoPopUp.style.display);
})
const closeIcon = document.querySelector('.order_list > .close')
const optionStatusBox = document.querySelector('.order_list')
console.log(closeIcon, optionStatusBox)
closeIcon.addEventListener('click', function(e){
    e.preventDefault()
    return optionStatusBox.style.display = 'none';
})