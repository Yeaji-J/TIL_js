// 1. 작은 이미지 마우스 올리면 opacity 낮아짐, 마우스 치우면 돌아옴
// 2. 작은 이미지 클릭 시, 검은색 테두리 & 큰 이미지 슬라이드 & 아래 페이지네이션 움직이기
// 3. 이미지 상하 이동 버튼 클릭 시 작은 이미지 슬라이드
// 4. 공유하기 버튼에 마우스 올리면 투명해지고, 버튼 클릭하면 공유하기 팝업
// 5. 헤택가 우측 버튼 누르면 말풍선 박스 뜸
// 6. 혜택 안내 부분 마우스로 클릭 후 이동 시 슬라이드
// 7. 수량 조정하면 가격 & 수량정보 (버튼 & 텍스트 둘 다) 바뀜
// 8. 수량 5개까지만 클릭 가능, 이상부터는 '최대 주문수량은 5개 입니다' 팝업창
// 9. 수량 1개 이상 클릭 가능, 1개 미만 클릭 시도 시 '최소 주문수량은 1개 입니다.' 팝업창
// 10. 위시 버튼 클릭 시 하트 검은색으로 바뀜
// 11. 장바구니, 바로구매 클릭 시 로그아웃 상태면 '회원 혹은 일부 회원등급만 구매 가능합니다. 비회원인 경우 회원가입 후 이용해주세요. 팝업창 ->
// 12. 위 팝업창에서 확인 누르면 로그인 페이지로 이동, 로그인 상태면 각각 페이지로 이동

// 1. 작은 이미지 마우스 올리면 opacity 낮아짐, 마우스 치우면 돌아옴
const smallImage = document.querySelectorAll('.small_images') //a 태그
function mouseOpacityFunc (a){
    a.addEventListener('mouseover',()=>{
        a.style.opacity = '50%'
    })
    a.addEventListener('mouseout',()=>{
        a.style.opacity = '100%'
    })
}
for(let i=0; i<smallImage.length; i++){mouseOpacityFunc(smallImage[i]);}

// 2. 작은 이미지 클릭 시, 검은색 테두리 & 큰 이미지 슬라이드 & 아래 페이지네이션 움직이기
const bigImage = document.querySelector('.big_image_group') // img 태그, 슬라이드
const pagenationA = document.querySelectorAll('.pagenation a')

let imgSlideWidth = bigImage.children[0].offsetWidth;
bigImage.style.transition = 'transform 0.3s'

/* smallImage[1].addEventListener('click',(e)=>{
    e.preventDefault();
    //테두리
    smallImage[1].style.border = '1px solid #111'
    smallImage[0].style.border = ''
    //큰 이미지 슬라이드
    bigImage.style.transform = `translateX(-${imgSlideWidth*1}px)`
    //페이지네이션 움직이기
    pagenationA[1].classList.add('active')
    pagenationA[0].classList.remove('active')
}) */
function resetSlide(){
    for(let i of smallImage){i.style.border = ''}
    for(let i of pagenationA){i.classList.remove('active')}
}
smallImage.forEach(function(obj,ind,arr){
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        //초기화 함수
        resetSlide();
        //테두리
        obj.style.border = '1px solid #111'
        //큰 이미지 슬라이드
        bigImage.style.transform = `translateX(-${imgSlideWidth*ind}px`
        //페이지네이션 움직이기
        pagenationA[ind].classList.add('active')
    })
})
// 3. 이미지 상하 이동 버튼 클릭 시 슬라이드 (사진 더 추가되면)

// 4. 공유하기 버튼에 마우스 올리면 투명해지고, 버튼 클릭하면 공유하기 팝업
const shareIcon = document.querySelector('.share_icon')
mouseOpacityFunc(shareIcon);
shareIcon.addEventListener('click',()=>{

})


// 10. 위시 버튼 클릭 시 하트 검은색으로 바뀜
const wishBtn = document.querySelector('#wish_btn')
const wishSrc = wishBtn.children[0].src
console.log(wishSrc)
wishBtn.addEventListener('click',()=>{
    if(wishSrc == "./images/wish_off_icon.png"){
        wishSrc = "./images/wish_on_icon.png"
    }else{wishSrc = "./images/wish_off_icon.png"}
})