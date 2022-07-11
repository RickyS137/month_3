const innInput = document.getElementById('inp')
const innCheck = document.getElementById('btn')
const innResult = document.getElementById('res')

const innValidate = /^0\d{13}$|1\d{13}$/

innCheck.addEventListener('click', () => {
    if (innValidate.test(innInput.value)){
        innResult.innerText = '✓'
        innResult.style.fontSize = '50px'
        innResult.style.color = 'green'
    }else {
        innResult.innerText = 'X'
        innResult.style.fontSize = '70px'
        innResult.style.color = 'red'
    }
})

const miniBox = document.querySelector('.box__in__box')

let position = 0;

const moveBox = () => {
    position ++;
    miniBox.style.marginTop = `${position}px`
    if (position < 50){
        return moveBox();
    }else if (position >= 450){
        position = 0
    }else {
        position += 50
    }
    console.log(position)
}
miniBox.addEventListener('click', () => {
    moveBox()
})