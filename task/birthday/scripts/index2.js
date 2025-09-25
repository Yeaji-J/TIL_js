// index.js
// jquery ver
// 초기세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultBox = $('#result_box')
/* const $resultM = $('#m')
const $resultFlower = $('#flower')
const $resultMeaning = $('#meaning') */
const $shareBtn = $('#share_btn')
$resultBox.hide();
$shareBtn.hide();
// '만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기

const $checkBtn = $('#check_btn')
const $year = $('.birth_y')
const $month = $('.birth_m')
const $day = $('.birth_d')

$checkBtn.click(function(){
    //조건 ? 참 : 거짓;
    console.log(Boolean($year.val()))
    const ymd = $year.val() && $month.val() && $day.val()
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요')
    function flowerFunc(){
        const $userMonth = $month.val()
        const $resultFlower = birthday_flower[$userMonth-1].flower
        const $resultFlowerMeaning = birthday_flower[$userMonth-1].content
        $resultBox.show();
        $shareBtn.show();
        $resultBox.find('#m').text($userMonth);
        $resultBox.find('#flower').text($resultFlower);
        $resultBox.find('#meaning').text($resultFlowerMeaning);
    }
})
// $이미지변수이름.attr('src', resultFlowerSrc)