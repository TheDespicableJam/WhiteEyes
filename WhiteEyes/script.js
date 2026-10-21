const scribble = document.getElementById('scribble')
const eye = document.getElementById('eye_holder')
const btn = document.getElementById('homebtn')

const piano = new Audio('../assets/piano.mp3')


document.body.style.backgroundImage = "none"
document.body.style.backgroundColor = "black"

window.addEventListener('load', function(){
    setTimeout(function(){
        scribble.style.animation = 'fadeIn 3s forwards'
    }, 1500)
})

scribble.addEventListener('animationend', function(){
    eye.style.animation = 'fadeIn 3s forwards'
})

eye.addEventListener('animationend', function(){
    setTimeout(function(){
        document.body.style.backgroundImage = "url(../assets/crows.gif)"
        piano.currentTime = 0
        piano.play()
            setTimeout(function(){
                btn.style.animation = 'fadeIn 3s forwards'
            }, 1000)
    }, 1000)
})