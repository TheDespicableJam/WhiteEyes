const dialog = document.getElementById('dialog')
const backyard = document.getElementById('backyard')

const crash = new Audio('../assets/pianoCrash.mp3')

dialog.addEventListener('animationend', function(){
    setTimeout(function(){
        backyard.style.opacity = 1;
        backyard.style.animation = "glitch 3s steps(1, end) forwards";
    })
    backyard.addEventListener('animationend', function(){
        crash.play()
        dialog.innerHTML=""
        dialog.innerHTML="..."
        setTimeout(function(){
            dialog.innerHTML= '"I should go back..."'
            setTimeout(function(){
                window.location="3am/WhiteEyes/Home"
            }, 3000)
        }, 6000)
    })
})

