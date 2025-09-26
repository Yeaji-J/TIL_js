// timer1.js
// setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 5){num1 = 1}
    console.log('timer test' +num1)
}, 500) */

// 0~6 반복타이머
// 123456 0123456 0123456
/* let num2 = 0;
const timer2 = setInterval(function(){
    num2++
    if(num2 > 6){num2 = 0}
    console.log(num2)
},500) */

// 3~0 반복타이머
// 3210 3210 3210
/* let num3 = 3;
const timer3 = setInterval(function(){
    if(num3 < 0){num3 = 3}
    console.log(num3)
    num3--
},500) */
/* 
console.log(num3)
num3--
if(num3 < 0){num3 = 3}
*/

// 이미지 슬라이드 타이머 활용
/* const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide') */

//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 (반복) 진행해야 하는 인덱스 순서
/* let gentleNum = 0;
let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length){gentleNum = 0}
    //console.log(gentleNum)
    for (let i of gentleSlide){i.style.display = 'none'} //객체가 i가 되는 거니까 i.style로 작성
    gentleSlide[gentleNum].style.display = 'block'
},1000) */

//이미지 슬라이드 역순
//012345 현재 존재하는 슬라이드 인덱스
//43210 543210 543210
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
console.log(gentleSlide2)
let gentleNum2 = gentleSlide2.length - 1;
let gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0){gentleNum2 = gentleSlide2.length - 1}
    //console.log(gentleNum2)
    for (let i of gentleSlide2){i.style.display = 'none'}
    gentleSlide2[gentleNum2].style.display = 'block'
},1000)

const aniTest = document.querySelector('.ani_test')
console.log(aniTest)

const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
console.log(gentleSlide, gentleSlideCurrentNum, gentleSlideTotalNum)
let gentleNum = 0;
gentleSlideCurrentNum.textContent = gentleNum +1;
gentleSlideTotalNum.textContent = gentleSlide.length;
//슬라이드 총 번호 표시

// opacity + visibility 서서히 나타나는 슬라이드 애니메이션
// gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide){
    i.style.transition = 'opacity 0.5s'
}
let gentleTimer = setInterval(function(){
    gentleNum++
    gentleSlideCurrentNum.textContent = gentleNum +1;
    if(gentleNum >= gentleSlide.length){gentleNum = 0}
    //console.log(gentleNum)
    for (let i of gentleSlide){
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    } //객체가 i가 되는 거니까 i.style로 작성
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlide[gentleNum].style.opacity = '1'
},3000)