//변수 생성
const userHeight = document.querySelector('#height_input')
const userWeight = document.querySelector('#weight_input')
const checkBtn = document.querySelector('#check_btn')
const resultMsg = document.querySelector('.result > .result_msg')
/* userHeight.value = 120; */
userHeight.value = '';
userWeight.value = '';

//이벤트 생성
checkBtn.addEventListener('click',function(){
    let goalWeight = (userHeight.value - 100)*0.9;
    let leftWeightToGoal = userWeight.value-goalWeight;
    console.log(goalWeight, leftWeightToGoal)
    if(userWeight.value > goalWeight){
        resultMsg.textContent = `적정체중 ${goalWeight}kg까지 ${leftWeightToGoal}kg 남음`;
    }else{resultMsg.textContent = '안 먹었나보네'}
})
