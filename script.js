
const text = document.body.querySelector('h1')
const btn = document.body.querySelector('button')
const bgc = document.body


btn.style.backgroundColor = 'black'
btn.style.color='white'
const changeBgColor = () => {
    if (text.style.color == 'red') {
        text.style.color = 'blue'
        bgc.style.backgroundColor = 'white'
        btn.style.backgroundColor = 'black'
        btn.style.color='white'
    }

    else{
        text.style.color = 'red'
        bgc.style.backgroundColor = 'black'
        btn.style.backgroundColor = 'white'
        btn.style.color='black'
    }
}