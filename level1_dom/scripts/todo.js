// todo.js
// 1. input 할일 입력후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할일 추가하기
const listAddBtn = document.querySelector('#list_add')
const listInput = document.querySelector('#list')
const listWrapUl = document.querySelector('#list_wrap')
console.log(listAddBtn, listInput)
/* listAddBtn.addEventListener('click',()=>{
    if(listInput.value != ''){
        listWrapUl.innerHTML += `<li>${listInput.value}</li>`
        listInput.value = '';
    }else{alert('할 일을 작성하세요')}
}) */

//삼항조건
listAddBtn.addEventListener('click',()=>{
    listInput.value == ''?alert('할 일을 입력하세요') : todoFunc();
listInput.addEventListener('keyup',(e)=>{
    if (e.key === 'Enter'){
        listInput.value == ''?alert('할 일을 입력하세요') : todoFunc();
    }
})
})
function todoFunc(){
    listWrapUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
    listInput.value = '';
    const closeBtn = document.querySelectorAll('li .close')
    console.log(closeBtn)
    for(let i of closeBtn){
        i.addEventListener('click',()=>{
            i.parentNode.remove();
    })}
    //부모잡는 속성 parentNode
    //삭제내장함수 remove()
    return console.log('할 일 출력 테스트');
}