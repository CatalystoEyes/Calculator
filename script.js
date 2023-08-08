let display = document.querySelector('.display')
const buttons =  document.querySelectorAll('button')

console.log(display)

buttons.forEach((item) => {
    item.onclick = () => { 
        if(item.id == 'clear'){
            display.innerText = ''
        }else if(item.id == 'backspace') {
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1)
        }else if(display.innerText != '' && item.id == 'equal'){
            let equal = display.innerText = eval(display.innerText)
            if(display.innerText.length < 13) {
                equal.innerText
            }else{
                setTimeout(() => (display.innerText = ''), 2000)
                display.innerText = ''
                display.innerHTML += '<h5>Number is too big!</h5>'
            }  
        }else if(display.innerText == '' && item.id == 'equal'){  
            display.innerText = "Empty!"
            setTimeout(() => (display.innerText = ''), 2000)
        }else {
            if(display.innerText.length < 13) {
                display.innerText += item.id
            }  
            else{
                setTimeout(() => (display.innerText = ''), 2000)
                display.innerText = ''
                display.innerHTML += '<h5>Number is too big!</h5>'
            }    
        }
    }
})