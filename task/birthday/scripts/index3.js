const resultBox = document.querySelector('#result_box')
const shareBtn = document.querySelector('#share_btn')
const checkBtn = document.querySelector('#check_btn')
const year = document.querySelector('.birth_y')
const month = document.querySelector('.birth_m')
const day = document.querySelector('.birth_d')
const bg = document.querySelector('#wrap')

// 초기세팅 : 결과 숨기기, 공유버튼 숨기기
resultBox.style.display = 'none'
shareBtn.style.display = 'none'

// '만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
checkBtn.addEventListener('click',()=>{
    const ymd = year.value && month.value & day.value
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요.')
    function bgChange (){
        bg.style.backgroundSize = '100%'
        bg.style.backgroundRepeat = 'no-repeat'
        bg.style.backgroundPosition = 'center'
    }
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){ //1~12 범위값 확인
            const userMonth = month.value;
            const resultFlower = birthday_flower[userMonth-1].flower
            const resultFlowerMeaning = birthday_flower[userMonth-1].content
            resultBox.style.display = 'block'
            shareBtn.style.display = 'inline-block'
            console.log(resultFlower, resultFlowerMeaning, resultBox.children[2])
            resultBox.children[0].textContent = userMonth;
            resultBox.children[1].textContent = resultFlower;
            resultBox.children[3].textContent = resultFlowerMeaning;
            bg.style.backgroundImage = `url(${birthday_flower[userMonth-1].src})`
            bgChange();
        }else{alert('1~12월 중 입력하세요.')}
    }
    
})
