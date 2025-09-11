// 함수
// 1. 함수 대기 (생성한 상태)
function func1(){
    console.log('반복 실행 내용')
}
// 2. 함수 호출 (생성 밖)
func1();
func1();

// 함수의 매개변수 활용
function storyFunc1(data='조약돌', day=1){/* 이야기의 첫째날 성공사례 */
    console.log(`매개변수 값 확인 : ${data, day}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔']
    //조약돌 준비
    //const src = '조약돌'
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
/* 이야기의 둘째날 실패사례 */
/* function storyFunc2(){
    const person = ['헨젤','그레텔']
    const src = '빵부스러기'
    alert(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`)
} */
storyFunc1(); //기본값 사용 시 매개변수 값 전달안함
storyFunc1('빵부스러기',2); //기본값 변경 시 매개변수 값 전달함
storyFunc1('쌀',3)

function coffeeRecipe(type,cup,shot){
    console.log(`-------- ${type} 레시피 --------`)
    console.log(`${cup}컵 물을 채운다.`)
    console.log(`${shot}샷 에스프레소를 넣는다.`)
}
coffeeRecipe('에스프레소',0,1);
coffeeRecipe(`아메리카노(HOT)`,2,1);

function kioskHot(kind,cup){
    const temp='따뜻한'
    console.log(`${temp} ${kind} ${cup}잔 주문완료 되었습니다.`)
}
function kioskIced(kind,cup){
    const temp='차가운'
    console.log(`${temp} ${kind} ${cup}잔 주문완료 되었습니다.`)
}
kioskHot('카페라떼',2);
kioskIced('아메리카노',1);
kioskHot('녹차라떼',2);
kioskIced('아메리카노',1);

//키오스크 주문 출력(배열 활용법)
function kiosk_array(hotice, name, num){
    const type = ['따뜻한','차가운']
    const menu = ['카페라떼', '아메리카노','녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문완료 되었습니다.`)
    //출력예시) 따뜻한 카페라떼 2잔 주문완료 되었습니다.
}
kiosk_array(0,0,2);
kiosk_array(1,1,1);
kiosk_array(0,2,2);
kiosk_array(1,1,1);

//키오스크 주문 출력(객체 활용법)
function kiosk_obj(hotice, name, num=1){
    const coffeeMenu = {
        type:['따뜻한','차가운'],
        menu:['아메리카노','카페라떼','녹차라떼'],
    }
    //출력예시) 따뜻한 카페라떼 2잔 주문 완료되었습니다.
    //console.log(`${coffeeMenu.속성[값]}`)
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문 완료되었습니다.`)
}
kiosk_obj(0,1,2)
kiosk_obj(1,0)
kiosk_obj(0,2,2)
kiosk_obj(1,0)

console.log('------------------------리턴')
function plusFunc(n1,n2){
    let calc = `${n1} * ${n2} = ${n1+n2}, `
    calc += `${n1} + ${n2} = ${n1*n2}`
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    // 대입연산자(=) 이전 변수 값을 제거하고 새로운 값 대입
    // 이전 변수 값을 유지하고 새로운 값 추가 대입 연산자는? 복합대입연산자
    //calc = calc + '계산식' -> calc += '계산식'
    // calc 
    return calc
}
console.log(plusFunc(3,4))

function plusFunc(n1,n2){
    return `${n1} * ${n2} = ${n1+n2}`+' , '+`${n1} + ${n2} = ${n1*n2}`
}
console.log(plusFunc(1,2))

// 구구단 함수(2~9단까지)
// 출력예시) 변수 X 변수 = 결과
function dan99Func(numb){
    //구구단 식
    return `${numb} X 1 = ${numb * 1}` +`, `+
    `${numb} X 2 = ${numb * 2}`+`, `+
    `${numb} X 3 = ${numb * 3}`+`, `+
    `${numb} X 4 = ${numb * 4}`+`, `+
    `${numb} X 5 = ${numb * 5}`+`, `+
    `${numb} X 6 = ${numb * 6}`+`, `+
    `${numb} X 7 = ${numb * 7}`+`, `+
    `${numb} X 8 = ${numb * 8}`+`, `+
    `${numb} X 9 = ${numb * 9}`
}
console.log(dan99Func(7))
//alert(dan99Func())
//prompt(dan99Func())

function dan99Func2(dan){
    let dan99Total = '';
    dan99Total += `${dan} X 1 = ${dan *1}, `
    dan99Total += `${dan} X 2 = ${dan *2}, `
    dan99Total += `${dan} X 3 = ${dan *3}, `
    dan99Total += `${dan} X 4 = ${dan *4}, `
    dan99Total += `${dan} X 5 = ${dan *5}, `
    dan99Total += `${dan} X 6 = ${dan *6}, `
    dan99Total += `${dan} X 7 = ${dan *7}, `
    dan99Total += `${dan} X 8 = ${dan *8}, `
    dan99Total += `${dan} X 9 = ${dan *9} `
    return dan99Total
    //return 아래 작성된 식은 실행되지 않음
}
console.log(dan99Func2(7))

// 할인율 계산기
// KB국민카드 5% 할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원

// 할인율 계산법 (100-5(할인율))/100 = 0.95
// 판매가 * 0.95
function cardFunc(corp, dc){
    const card = ['KB국민카드', '현대카드', '삼성카드'] //카드사 정보
    const price = 1051000; //원가
    const calc = (100-dc)/100 ;//할인율 계산
    const totalPrice = calc * price;//판매가 계산
    const result = `${card[corp]} ${dc}% 할인적용가 ${totalPrice}원`; //출력결과
    return `${card[corp]} ${dc}% 할인적용가 ${totalPrice.toLocaleString('ko-kr')}원`
}
console.log(cardFunc(0,5))
console.log(cardFunc(1,10))
console.log(cardFunc(2,20))
// KB국민카드 5% 할인적용가 ?원
// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello '+user)
}
// hello1('yeaji')

const hello2 = function(user){
    return alert('hello '+user)
}
//hello2('yeaji')

// 익명함수 + 화살표함수 (ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello '+user)
}
hello3('ju')