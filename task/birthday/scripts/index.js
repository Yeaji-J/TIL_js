const year = document.querySelector('.birth_y')
const month = document.querySelector('.birth_m')
const date = document.querySelector('.birth_d')
const resultBtn = document.querySelector('#check_btn')
const warningtxtP = document.querySelector('#warning_txt')
const resultBoxP = document.querySelector('#result_box')
const shareBtn = document.querySelector('#share_btn')
console.log(month)
/* warningtxtP.textContent = '';
resultBoxP.textContent = ''; */
resultBoxP.style.display = 'none'
shareBtn.style.display = 'none'
resultBtn.addEventListener('click',()=>{
    const m = document.querySelector('#id')
    const flower = document.querySelector('#flower')
    const meaning = document.querySelector('#meaning')
    console.log(year.value.length);
    if(year.value == '' || typeof(year.value) !== 'number' || year.value.length != 4){
        warningtxtP.textContent = '출생연도를 올바르게 입력해주세요'
    }else if(month == '' || typeof(month) !== 'number' ||month.length > 2){
        warningtxtP.textContent = '출생월을 올바르게 입력해주세요'
    }else if(date == '' || typeof(date) !== 'number' ||date.length > 2){
        warningtxtP.textContent = '출생일을 올바르게 입력해주세요'
    }else {
        resultBoxP.style.display = 'block'
        shareBtn.style.display = 'block'
        m.textContent = birthday_flower[month.value - 1].month
        flower.textcontent = birthday_flower[month.value - 1].flower
        meaning.textcontent = birthday_flower[month.value - 1].content
    }
})

/* const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
        src:'https://i.pinimg.com/736x/50/30/5e/50305e5f6f94704532d1dff5140237a8.jpg' */