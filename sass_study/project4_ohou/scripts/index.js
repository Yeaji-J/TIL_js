// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
//1. 변수, 2.초기값 설정 3. 이벤트,함수 설정



// 동적 요소 계획하기
// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 😉 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화 (색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 주문목록 출력 (선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량 + 주문금액 표시
// 10. 주문목록 = 클릭 시 주문수량+주문금액 감소
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
// 😉 12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// --------------------------------
// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
const imgSmallCol1 = document.querySelectorAll('.img_col1 > a') //All! 인 거 기억하기, 가급적 형제로 잡기
const imgBigCol2 = document.querySelector('.img_col2 img')
console.log(imgSmallCol1, imgBigCol2)
//초기값(첫번째 썸네일a가 보이고 있단 뜻으로 테두리가 있음)
imgSmallCol1[0].style.border = '2px solid #0aa5ff'

// 두번째 썸네일에 마우스 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기
// 콘솔테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
// 콘솔테스트 권장 2) 큰 이미지 경로 출력하기
console.log(imgSmallCol1[1].children[0].src) /* <a><img src=''></a> */
console.log(imgBigCol2.src)
// 이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정! (초기값) - 이벤트 바깥에서!
imgSmallCol1[0].children[0].style.transition = 'transform 0.5s'
imgSmallCol1[1].children[0].style.transition = 'transform 0.5s'


// 이벤트 함수 시작
imgSmallCol1[0].addEventListener('mouseover',function(){
    //이미지 변경 (경로)
    imgBigCol2.src = imgSmallCol1[0].children[0].src
    // 이미지 확대
    imgSmallCol1[1].style.border = ''
    imgSmallCol1[0].style.border = '2px solid #0aa5ff'
    // 이미지 애니메이션
    imgSmallCol1[1].children[0].style.transform = 'scale(1)';
    imgSmallCol1[0].children[0].style.transform = 'scale(1.2)';
})
imgSmallCol1[1].addEventListener('mouseover',function(){
    imgBigCol2.src = imgSmallCol1[1].children[0].src
    //imgBigCol2.src = `${imgSmallCol1[1].children[0].src}`
    imgSmallCol1[0].style.border = ''
    imgSmallCol1[1].style.border = '2px solid #0aa5ff'
    imgSmallCol1[1].children[0].style.transform = 'scale(1.2)';
    imgSmallCol1[0].children[0].style.transform = 'scale(1)';
})

/* imgSmallCol1[num].addEventListener('mouseover',(num)=>{
    imgBigCol2.src = './images/big(num+1).jpg'
    imgSmallCol1[num+1].style.border = ''
    imgSmallCol1[num].style.border = '2px solid #0aa5ff'
}) */
// 
/* const priceInfoPopUp = document.querySelector('#info')
const infoIcon = document.querySelector('.price_info > a')
console.log(priceInfoPopUp, infoIcon)
infoIcon.addEventListener('click',(e)=>{
    e.preventDefault()
    priceInfoPopUp.style.display = 'inline-block';
    console.log(priceInfoPopUp.style.display);
})

}) */
// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin','true'); // true, false 값에 따라 이동하는 페이지가 달라짐, 하단 함수

// 😉 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
const bookMark = document.querySelector('.right_icon > .scrap')
let loginStatus = '';
console.log(bookMark);
// 로그인 시 wish.html 이동
// 로그아웃 시 login.html 이동
bookMark.addEventListener('click', function(){
    // 상태 가져오기 변수
    loginStatus = localStorage.getItem('isLogin')
    // 위 변수 이용한 조건 분기
    if(loginStatus == 'true'){
        location.href = "./wish.html"
    }else{
        location.href = "./login.html"
    }
})

// 3. 리뷰 클릭 시 스크롤 이동
/* const reviewBtn = document.querySelector('.contents > .review') */
const reviewWrap = document.querySelector('.review_wrap')
console.log(reviewWrap)
/* console.log(reviewBtn, reviewWrap) */
// 클릭 이벤트
/* reviewBtn.addEventListener('click',(e)=>{
    //스크롤 이동 window 함수 scrollTo(x,y)
    e.preventDefault();
    window.scrollTo(0,reviewWrap.offsetTop);
    //offset:계산, top->좌표 . offsetTop = 속성
}) */
console.log(reviewWrap.offsetTop)//리뷰위치의 위쪽 좌표값 확인
// sticky_menu
// 리뷰 메뉴 클릭시 리뷰wrap으로 이동
const reviewMenu = document.querySelectorAll('.review')
console.log(reviewMenu)
/* reviewMenu[0].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,reviewWrap.offsetTop)
})
reviewMenu[1].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,reviewWrap.offsetTop)
}) */
// 유지보수 좋게 수정
function reviewMenuFunc(){
    return window.scrollTo(0,reviewWrap.offsetTop)
}
reviewMenu[0].addEventListener('click',(e)=>{
    e.preventDefault();
    reviewMenuFunc()
})
console.log(reviewMenu[1])
reviewMenu[1].addEventListener('click',(e)=>{
    e.preventDefault();
    reviewMenuFunc()
})
// 위의 함수를 모든 각각의 메뉴에 대한 함수로 수정할 수도 있다! 깔끔해짐
/* function menuPstFunc (target){
    return window.scrollTo(0,target.offsetTop)
}} */
// 상품정보 메뉴 클릭시 상품정보wrap으로 이동
const infoMenu = document.querySelector('.sticky_menu > a:first-child')
const infoWrap = document.querySelector('.info_detail_wrap')
console.log(infoMenu)
infoMenu.addEventListener('click', (e)=>{
    e.preventDefault()
    window.scrollTo(0,infoWrap.offsetTop)
})

// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
const infoIcon = document.querySelector('.price_info .info_icon')
const infoPopupContent = document.querySelector('.price_info #info')
console.log(infoIcon, infoPopupContent)
// 가격 정보 (i) 클릭 시 정보 팝업 출력
// 초기 : 숨김(false)
// 클릭 : 보이기(true) -> false -> true -> false -> true ...
let infoBoolean = false; // 초기 : 숨김(false)

infoIcon.addEventListener('click',(e)=>{
    //infoBoolean의 상태를 클릭할 때마다 값(infoBoolean) 반전
    // 반전한 걸 원본 변수에 대입
    infoBoolean = !infoBoolean;
    console.log(infoBoolean)
    if(infoBoolean == true){
        infoPopupContent.style.display='inline-block'
    }else{
        infoPopupContent.style.display='none'
    }
    e.preventDefault()
})

// 5. 주문 목록 초기 숨기기 order_list
// 6. 사이즈 select 초기 비활성화
const sizeOption = document.querySelector('#size') // select 자체를 잡기!
const colorOption = document.querySelector('#color') // select 자체를 잡기!
const optionBox = document.querySelector('.order_list')
console.log(sizeOption, optionBox, colorOption)
sizeOption.disabled = true;
optionBox.style.display = 'none'
let totalPrice = document.querySelectorAll('.total_sum_one > strong') // 주문금액 변수
console.log(totalPrice);

// 6-2. (색상 선택 시 활성화)
colorOption.addEventListener('change',()=>{
    // 색상 select 에서 첫번째 value = none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    if(colorOption.selectedIndex != 0){
        sizeOption.disabled = false; // 활성화
        //사이즈 이벤트 작성위치
        sizeOption.addEventListener('change',()=>{
            if(sizeOption.selectedIndex != 0){
                console.log('선택 완료')
                optionBox.style.display = 'grid'
                //선택한 옵션 안에 글자 가져오는 속성 text
                console.log(optionBox.children[0].children[1]); //선택한 색상 출력 위치
                let orderColor = colorOption.options[colorOption.selectedIndex].text;
                // let orderColorReplace = orderColor.replace(찾는값, 변경값)
                // 정규표현식 시작과 끝 표시 /검사내용/
                // 괄호찾기 \찾는문자 \(.*\)
                // 모든내용 .* 
                let orderColorReplace = orderColor.replace(/\(.*\)/,'');
                optionBox.children[0].children[1].textContent = orderColorReplace;
                console.log(optionBox.children[0].children[4]); //선택한 사이즈 출력 위치
                let orderSize = sizeOption.options[sizeOption.selectedIndex].text;
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'');
                optionBox.children[0].children[4].textContent = orderSizeReplace;
                totalPrice[0].textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                totalPrice[1].textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                console.log(totalPrice[0].textContent);
            }
        })
    }else{ //사용자가 선택한 opt 0일 때
        sizeOption.disabled = true;}
})
console.log(colorOption.selectedIndex)
console.log(colorOption.options[0])
/* const closeIcon = document.querySelector('.order_list > .close')
closeIcon.addEventListener('click', function(e){
    e.preventDefault()
    return optionBox.style.display = 'none';
}) */

// DB 불러오기 테스트
console.log(productOptDB[0].name)
console.log(productOptDB[0].color[0] + productOptDB[0].color[1])

//DB -> HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 = document.createElement('option')
console.log(colorOpt1)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]} (${(productOptDB[0].price).toLocaleString('ko-kr')}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorOption.appendChild(colorOpt1)
// * 생성한 태그가 li면 ul,ol의 마지막 자식 위치로 삽입
// * 생성한 태그가 option면 select의 마지막 자식 위치로 삽입

const colorOpt2 = document.createElement('option')
colorOpt2.textContent = `${productOptDB[0].color[1]} (${(productOptDB[0].price).toLocaleString('ko-kr')}원)`
colorOption.appendChild(colorOpt2)

// 7. 색상 -> 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) - 콘솔 ' 선택 완료'
console.log(colorOption.options[0])
console.log(sizeOption.options[0])

// 8. 주문목록 'x' 클릭 주문목록 삭제
const closeIcon = document.querySelector('.order_list > .close')
console.log(closeIcon, optionBox)
closeIcon.addEventListener('click', function(e){
    e.preventDefault()
    totalPrice[0].textContent = 0;
    totalPrice[1].textContent = 0;
    colorOption.selectedIndex = colorOption.options[0]
    sizeOption.selectedIndex = sizeOption.options[0]
    return optionBox.style.display = 'none'
})
// 다른 방법 👇
/* closeIcon.addEventListener('click',()=>{
    closeIcon.parentNode.style.display="none";
})
closeIcon.addEventListener('click',function(){
    this.parentNode.style.display = "none";
}) */
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+금액 표시
// 필요목록 : +버튼, 재고수량(productOptDB[0].stock), 주문수량, 주문금액(orderPrice), 증가 숫자 데이터
let inputNum = document.querySelector('#input_num') // 입력된 주문수량
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
// let totalPrice = document.querySelectorAll('.total_sum_one > strong') // 주문금액 변수

let num = 1;
inputNum.value = num; //inputNum.value는 껍데기!
/* let inputDisplay = Number(inputNum.value) */
plusBtn.addEventListener('click',()=>{
    if (num <= productOptDB[0].stock - 1){
    num += 1; //num++;
    //inputNum.value = num; //.value가 이미 display의 속성을 가지고 있다고 생각하면 출력을 어떻게 해야할지 고민할 필요가 없다 //// 위에서 선언했는데 또 선언하는 이유,,,?
    plusMinusFunc();
    }else{
        alert ('최대 구매 수량입니다')
    }
})
// 10. 주문목록 = 클릭 시 주문수량+주문금액 감소
minusBtn.addEventListener('click',()=>{
    if (num >=2){
    num -= 1;
    plusMinusFunc();
    }else{
        alert ('최소 구매 수량입니다')
    }
})
function plusMinusFunc(){ //함수생성
    let total = (num * productOptDB[0].price).toLocaleString('ko-kr')
    inputNum.value = num;
    totalPrice[0].textContent = total;
    totalPrice[1].textContent = total;
    return
}
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
// 😉 12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn,buyBtn)
//let loginStatus = ''; 위 변수 복붙

cartBtn.addEventListener('click',()=>{cartBuyBtnFunc("./cart.html")})
buyBtn.addEventListener('click',()=>{cartBuyBtnFunc('./buy.html')})

function cartBuyBtnFunc(url){
    if (colorOption.selectedIndex == 0 || sizeOption.selectedIndex == 0){
        alert ('옵션 선택 후에 버튼을 클릭해 주세요.')
    }else{
        loginStatus = localStorage.getItem('isLogin')
        if (loginStatus == 'true'){ // 로그인 유(장바구니 페이지), 로그인 무(로그인 페이지)
            location.href= url
        }else{
            location.href="./login.html"
        }
    }
}

