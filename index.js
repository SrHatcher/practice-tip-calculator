const button5 = document.getElementById('button-5')
const button10= document.getElementById('button-10')
const button15 = document.getElementById('button-15')
const button25 = document.getElementById('button-25')
const button50 = document.getElementById('button-50')

const resetButton = document.getElementById('reset-button')

function calculateTip(){
    const billInput = document.getElementById('bill-input');
    const tipCustomPercent = document.getElementById('custom-input')
    const buttonSelected = document.querySelector('.button--active')?.getAttribute('value');
    const peopleAmount = document.getElementById('people-input');
    
    const tipAmount = document.getElementById('tip-amount');
    const total = document.getElementById('total');

    const errorSpan = document.querySelector('.people_labels__error');
    
    if(peopleAmount.value.trim()=='' || !Number(peopleAmount.value)){
        if(Number(peopleAmount.value)===0){
            errorSpan.style.display = 'unset'
        }
        return
    }

    if(Number(peopleAmount.value)){
        errorSpan.style.display = 'none'
    }

    if((tipCustomPercent.value.trim()!=='' && Number(tipCustomPercent.value) && Number(tipCustomPercent.value)>0)){
        const tip = (billInput.value * (tipCustomPercent.value / 100)).toFixed(2);
        const totalAmount = (tip * peopleAmount.value).toFixed(2);

        tipAmount.innerText = tip
        total.innerText = totalAmount

        return;
    }

    if(buttonSelected){
        tipCustomPercent.value = ''

        const tip = (billInput.value * (buttonSelected / 100)).toFixed(2);
        const totalAmount = (tip * peopleAmount.value).toFixed(2);

        tipAmount.innerText = `$${tip}`
        total.innerText = `$${totalAmount}`

    }
    
} 

function activateButton(e=undefined){
    if(e){
        const activeButton = document.querySelector('.button--active');
        activeButton ? activeButton.classList.remove('button--active') : null;
        e.target.classList.add('button--active')
    }
    const customInput = document.getElementById('custom-input').value;
    if(customInput){
        const activeButton = document.querySelector('.button--active');
        activeButton ? activeButton.classList.remove('button--active') : null;
    }

    const resetButton = document.getElementById('reset-button');
    resetButton.disabled = false
    calculateTip();
}

window.addEventListener('keyup', ()=>activateButton())
button5.addEventListener('click', (e)=>activateButton(e))
button10.addEventListener('click', (e)=>activateButton(e))
button15.addEventListener('click', (e)=>activateButton(e))
button25.addEventListener('click', (e)=>activateButton(e))
button50.addEventListener('click', (e)=>activateButton(e))

resetButton.addEventListener('click', ()=>{
    const billInput = document.getElementById('bill-input');
    const tipCustomPercent = document.getElementById('custom-input')
    const peopleAmount = document.getElementById('people-input');

    const tipAmount = document.getElementById('tip-amount');
    const total = document.getElementById('total');

    const errorSpan = document.querySelector('.people_labels__error');
    const activeButton = document.querySelector('.button--active');

    billInput.value = ''
    tipCustomPercent.value=''
    peopleAmount.value=''
    tipAmount.innerText = '$0.00'
    total.innerText ='$0.00'

    errorSpan.style.display = 'none'
    activeButton ? activeButton.classList.toggle('button--active', false) : undefined;

    const resetButton = document.getElementById('reset-button');
    resetButton.disabled = true
})
