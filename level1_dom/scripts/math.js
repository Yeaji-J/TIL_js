console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1) //3
num1 = Math.floor(3.2) // 소수점 버리고 정수 출력
console.log(num1) //3
console.log('--------------------------')
let num2 = Math.round(3.7)
console.log(num2) //4
num2 = Math.round(3.2)
console.log(num2) //3
num2 = Math.round(5.789)
console.log(num2) //6
console.log('---------------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random () * 5;
console.log(num3)
num3 = Math.floor(Math.random() * 11)
console.log(num3)
console.log('----------------')

//10%, 20%, 30%, 40%, 50% 쿠폰 랜덤 출력
const couponDB = ['10%','20%','30%','40%','50%']
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert() 출력메시지 실행
couponBtn.addEventListener('click',()=>{
    const couponPercent = (Math.floor(Math.random() *5))
    console.log(couponPercent)
    /* alert(`${couponPercent}% 할인쿠폰 당첨!`) */ 
    alert(`${couponDB[couponPercent]} 할인쿠폰 당첨!`)
})

//화면에 접속했을 때 광고 2개가 랜덤 표시
const adDB = [{
    name: '제주도 여행', //alt에 대입
    src: 'https://i.pinimg.com/736x/9b/74/9f/9b749f97e0aa9322f9ab8bf4f91b85d5.jpg',
    link:'https://naver.com'
},{
    name:'일본 여행',
    src: 'https://i.pinimg.com/736x/d2/24/16/d224166e4200533f6ea755a7278e4855.jpg',
    link: 'https://google.com'
}]
// alt에 adDB.name 대입, src에 adDB.src 대입, link를 a href에 대입
// 화면에 접속

window.addEventListener('load',()=>{
    const adSection = document.querySelector('.ad')
    const adRandom = Math.floor(Math.random()*2);
    console.log(adRandom)
    adSection.children[0].href = adDB[adRandom].link; //a에 대입
    adSection.children[0].children[0].src = adDB[adRandom].src; //img에 대입
    adSection.children[0].children[0].alt = adDB[adRandom].name; //img에 대입
})

// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 결과 출력하기
// 1. 기본변수(4) -> price . person. 버튼, em
const totalBtn = document.querySelector('#total_btn') //버튼
const price = document.querySelector('#price') //input
const person = document.querySelector('#person') //input
const resultEm = document.querySelector('.result em') //출력 결과
// 2. 이벤트 -> 금액이 소수점일 경우 소수점 값에 따라 반올림하기
totalBtn.addEventListener('click',()=>{
    const resultPrice = Math.round(price.value / person.value).toLocaleString('ko-kr')
    resultEm.textContent = resultPrice;
})
//
price.parentNode.style.fontSize = '1.5rem'
person.parentNode.style.fontSize = '1.5rem'
totalBtn.style.border = '2px solid #000'
totalBtn.style.borderRadius = '30px'
totalBtn.style.padding = '20px'
totalBtn.style.fontSize = '1.4rem'
resultEm.parentNode.style.fontSize = '1.4rem'
resultEm.style.color = 'pink'
resultEm.style.fontSize = '2rem'
resultEm.style.fontWeight = '600'
totalBtn.parentNode.style.width = '500px'
totalBtn.parentNode.style.width = '500px'
totalBtn.parentNode.style.margin = '0 auto'
totalBtn.parentNode.style.display = 'flex'
totalBtn.parentNode.style.flexFlow = 'column nowrap'
totalBtn.parentNode.style.gap = '10px'

//DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

//변수
const minPrice = document.querySelector('.min_price')
const minPriceBtn = document.querySelector('#min_price_btn')
const pp = [1000,2000,3000,4000] //test
console.log(Math.min(...pp)) //test
// 스프레드 연산자 (...배열명) 여러 배열값을 한 번에 처리하는 배열처리법
// 이벤트
minPriceBtn.addEventListener('click',()=>{
    // 1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    // map 문
    const priceMap = shopDB.map(i => i.price) //price 배열값만 잡음
    const minPriceItself = Math.min(...priceMap)
    console.log('최저가 : ', minPriceItself)
    // 2. 추출한 가격에서 최저가 찾기
    minPrice.textContent = `최저가 : ${minPriceItself}`
    })

console.log('----------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000
}]
const priceMinBtn = document.querySelector('#price_btn')
const priceResultTxt = document.querySelector('.result1')
const deliveryBtn = document.querySelector('#delivery_btn')
const deliveryResultTxt = document.querySelector('.result2')
const shopListUl = document.querySelector('#shop_list')
console.log('------------')
const priceMaxBtn = document.querySelector('#max_price_btn')
const maxList = document.querySelector('#max_list')
priceMaxBtn.addEventListener('click',()=>{ //버튼 클릭 시
    //최고가부터 정렬
    //shopDB 전체 배열 내림차순 정렬
    const maxSort = [...shopDB].sort((a, b) => b.price - a.price)
    console.log(maxSort)
    //for문으로 li생성 -> innerHTML로 shop, price 만들기 -> ul에 넣기
    for(let i of maxSort){//for문으로 li 생성,meaning) 모든 배열에 대해
        const li = document.createElement('li') //maxSort랑 상관없는 li 자체를 생성
        // innerHTML 만들기
        li.innerHTML = `쇼핑몰 : ${i.shop} |`
        li.innerHTML += ` 가격 : ${(i.price).toLocaleString('ko-kr')}원`
        console.log(li)
        // ul에 넣기
        maxList.appendChild(li)
        li.style.lineHeight = '150%'
    }
})
//버튼 클릭 시 최저가 찾기
priceMinBtn.addEventListener('click',()=>{ //버튼 클릭 시
    //최저가 JS
    const shopDBPriceMap = shopDB2.map(i=>i.price) //모든 price 값 잡음
    const minResult = Math.min(...shopDBPriceMap).toLocaleString('ko-kr')// price 중 최저가
    priceResultTxt.textContent = `최저가 : ${minResult} 원` //price 중 최저가 출력
    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price)
    console.log(sort)
    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    for (let i of sort){
        const li = document.createElement('li') // <li></li>
        /* li.textContent = i.shop */ // <li>이마트몰</li>
        li.innerHTML = `<a href="#">${i.shop}</a>` //<-- a href 태그를 넣고 싶으면 innerHTML을 사용
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>배송비 ${i.delivery}</em>`
        shopListUl.appendChild(li) //creatElemnt로 삽입한 JS태그는 appendChild함수로 대입한다
    }
})
//배송비 무료 찾기
deliveryBtn.addEventListener('click',()=>{ //버튼 클릭 시
    const shopDBDeliveryMap = shopDB2.map(i=>i.delivery) //모든 delivery 값 잡음
    const minDelivery = Math.min(...shopDBDeliveryMap).toLocaleString('ko-kr')//배송비 최저가 잡기
    if (minDelivery == 0){
        deliveryResultTxt.textContent = `배송비 : ${minDelivery} 원`
    }else {deliveryResultTxt.textContent = '배송비 무료 상품이 없습니다'}
})

