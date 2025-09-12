const inputTag = document.querySelectorAll('input')
const buttonTag = document.querySelectorAll('button')
console.log(inputTag, buttonTag)
console.log(inputTag[0], buttonTag[0])
console.log(inputTag[1], buttonTag[1])
console.log(inputTag.length, buttonTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('#num')
const shopCartBtn = document.querySelector('#cart_btn')
const shopNumCartSection = document.querySelector('section:nth-child(2)')
/* const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('section:first-child input')
const searchInput = document.querySelector('input[name*=s]') */
console.log(searchInput, searchBtn, shopNumInput, shopCartBtn) //querySelectorAll이 아니므로 [인덱스] 사용금지

/* 태그 속성 ★, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder) //속성 읽기
//searchInput.placeholder() // 함수일때
searchInput.placeholder = '' // 속성일때
searchInput.value = '인기검색어 : HTML'
let checkValue = searchInput.value; // 속성 읽기 (input의 값을 읽는다)
console.log(checkValue)
// 빈 문자열로 변수 생성 후, 변수 담는 방법
// let checkValue = ''; //빈 값 초기화
// searchInput.value = '인기검색어 : HTML' //value 값 변경
// checkValue = searchInput.value; // 변경값 변수 담기
// console.log(checkValue) //출력 확인

console.log(shopNumInput.value)
console.log(typeof(shopNumInput.value))
let displayValue = Number(shopNumInput.value) + 1;
console.log(typeof(displayValue))
console.log(`주문수량 : ${displayValue}`);

searchBtn.style.backgroundColor = 'skyblue'
searchBtn.style.padding = '4px 20px'
searchBtn.style.borderRadius = '20px'
searchBtn.style.color = 'white'
searchBtn.style.fontSize = '1rem'
searchBtn.style.fontWeight = '500'
searchInput.style.border = '2px solid #aaa';
searchInput.style.fontSizze = '1.2rem';
searchInput.style.fontWeight = '500';
searchInput.style.textAlign = 'center';
shopNumInput.style.backgroundColor = '#ddd';
shopNumInput.style.textAlign = 'center';
shopNumInput.style.width = '20px';
shopCartBtn.style.backgroundColor = 'pink';
shopCartBtn.style.padding = '4px 35px'
shopCartBtn.style.borderRadius = '25px'
shopNumCartSection.style.margin = '20px 0 0'
shopNumCartSection.style.display = 'flex'
shopNumCartSection.style.justifyContent = 'center'
shopNumCartSection.style.gap = '5px'

// 이벤트 활용 콜백함수 호출
// 이벤트 문법
// 객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order')
console.log(orderBtn);

// 주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
// 이벤트 뒤 함수 작성방식 : 콜백함수 호출(권장), 익명함수
/* orderBtn.addEventListener('click', function(){
    alert('상품을 선택하세요')
    }) */

// 이벤트 뒤 콜백함수는 함수 그 자체를 호출하는 개념으로 결과값만 받고 수정값은 따로 전달하지 않는다.
// 매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표 함수 추가 제작으로 수정가능한 함수로 재작성하는 게 일반적인 방법이다.


// 주문하기 클릭 시 '장바구니에 담으세요'
// 장바구니 클릭 시 '상품을 담으세요'
// 콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메시지 출력하기
const cartBtn = document.querySelector('#cart')
console.log(cartBtn);
function orderFunc(data){
    return alert(data+ ' 담으세요')
}
orderBtn.addEventListener('click',orderFunc_v2('상품'))
function orderFunc_v2(data){
    return function(){/* 클로저(Closure) */
        // 내부 함수는 외부 함수의 매개변수를 기억한다.
        alert(data+ ' 담으세요')
    }
}
/* orderBtn.addEventListener('click',function(){
    orderFunc('장바구니에')
})
orderBtn.addEventListener('click',()=>{
    orderFunc('장바구니에')
}) */
cartBtn.addEventListener('click',function(){
    orderFunc('상품을')
})

// 아이디, 비밀번호 중복확인 클릭 시
// 아이디가 중복되었습니다.
// 비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector('#id')
const pwOverlapBtn = document.querySelector('#pw')
console.log(idOverlapBtn, pwOverlapBtn)
//2. "클릭 시" 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click',overlapFunc('아이디'))
pwOverlapBtn.addEventListener('click',overlapFunc('비밀번호'))
function overlapFunc(msg){
    return function(){
        alert (msg+ '가 중복되었습니다')
    }
}
//3. 실행 메시지가 통일된 특징에 맞춰서 콜백함수 1개 제작
//3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출


// 이벤트 콜백함수 연습
// Q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
// Q2. textarea를 활성화했을 때 테두리 빨강색
// Q2. textarea를 비활성화했을 때 테두리 회색
const reviewTextarea = document.querySelector('textarea')
console.log(reviewTextarea)
reviewTextarea.addEventListener('keydown', typeMore)
function typeMore(){
    return console.log('50자 이상 입력하세요')
}
reviewTextarea.addEventListener('focus', ()=>{borderFunc('#f00')})
reviewTextarea.addEventListener('blur',()=>{borderFunc('#aaa')})
function borderFunc(color){
    return reviewTextarea.style.border = `1px solid ${color}`
}
borderFunc('#aaa') //초기값
reviewTextarea.style.outline = 'none' //활성화 시 검은 테투리 제거

// 배경 버튼에 마우스 올리면 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('article > button')
const bgP = articleTag.querySelector('p')
console.log(bgBtn, bgP)
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
//bgBtn.addEventListener('mouseover', 콜백함수) (x) -> 여러개를 한 번에 함수처리하면 오류나므로 인덱스 활용
bgBtn[0].addEventListener('mouseover', articleBgChange('#ffc'))
bgBtn[1].addEventListener('mouseover', articleBgChange('#fc9'))
bgBtn[2].addEventListener('mouseover', articleBgChange('#fcc'))
function articleBgChange (bgColor){
    return function(){
        articleTag.style.backgroundColor = bgColor
        bgP.textContent = `현재 배경 색상 : ${bgColor}`
    }
}
bgBtn[0].addEventListener('click', articleBgChange)

