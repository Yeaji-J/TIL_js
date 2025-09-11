function naverLink(){
    return window.open('https://naver.com','_blank')
}
//naverLink()
const writeFunc = function(){
    return windeow.location.href('https://google.com')
}
//DOM
const btn = document.getElementsByTagName('button')
const div = document.getElementsByTagName('div')
console.log(btn,div);
btn[2].style.color='red';
btn[0].style.backgroundColor='yellow';
btn[0].style.border = '1px solid red'
// JS - HTML, CSS
// DOM.style.color; //읽기
// DOM.style.color = '값'; //수정
// 객체.속성.속성
// 객체.함수()

//클래스 선택하기
const slide = document.getElementsByClassName('slide')
const slideWrap = document.getElementsByClassName('slide_wrap')
console.log(slide[1], slideWrap);
slide[0].style.backgroundColor = '#ff0'
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)'
slideWrap[0].style.border = '5px solid purple'
slideWrap[0].style.backgroundColor = 'yellow'
/* 태그와 클래스 DOM은 반드시 인덱스 붙여서 사용하기 - 추가될 가능성이 있기 때문에 배열로 처리 */

// 아이디 DOM
const container = document.getElementById('slide_container')
console.log(container);
container.style.backgroundColor = 'pink';
container.style.margin = '0 auto';
// 아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다
slide_container.style.filter = 'invert(1)'

// ES6 querySelector
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelector('#slide_container')
console.log(tag_es6, cls_es6, id_es6)

// 메뉴 구조
const id_main = document.querySelector('#main')
id_main.style.backgroundColor = 'pink'
const cls_gnb = document.querySelector('.gnb')
cls_gnb.style.border = '3px solid black'
cls_gnb.fontSize = '3rem'
const tag_menu_li = document.querySelectorAll('.gnb > li') // li가 흔한 태그이기 때문에 정확하게 써준다
const navLi_v2 = cls_gnb.querySelectorAll('li') // 위랑 동일한 태그
tag_menu_li[0].style.fontSize = '3rem'
tag_menu_li[1].style.fontSize = '3rem'
tag_menu_li[2].style.fontSize = '3rem'
tag_menu_li[3].style.fontSize = '3rem'
const tag_menu_a = document.querySelector('.gnb > li > a')
tag_menu_a.fontSize = '3rem'
cls_gnb.style.display = 'flex'
cls_gnb.style.flexFlow = 'row nowrap'
cls_gnb.style.gap = '20px'
cls_gnb.style.justifyContent = 'center'
cls_gnb.style.alignItems = 'center'
// DOM 변수 사용 시 ALL 키워드 유무에 따라 [인덱스] 사용 주의하기!

// 로그인 알고리즘
// 버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm > button')
const loginId = document.querySelector('#id')
const loginName = document.querySelector('#name')
const loginPw = document.querySelector('#pw')
console.log(loginBtn, loginId, loginName, loginPw)
const loginForm = document.querySelector('#loginFrm')
console.log(loginForm)
console.log(loginId.name);
console.log(loginId.type);
//객체.속성; // 속성 읽기
//객체.속성.속성 = 대입값;
//이미지객체.src = '경로'
/* loginId.type = 'password' */
function userInfo(){
    let data = loginId.value;
    data += loginName.value;
    data += loginPw.value;
    return console.log(data);
}
loginForm.style.display = 'flex'
loginForm.style.justifyContent = 'center'
loginForm.style.gap = '20px'
loginForm.style.margin = '30px 0'
loginForm[0].style.border = '2px solid #ddd'
loginForm[1].style.border = '2px solid #ddd'
loginForm[2].style.border = '2px solid #ddd'
loginForm[3].style.border = '2px solid #ddd'
