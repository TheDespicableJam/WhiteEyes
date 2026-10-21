const dialog = document.getElementById('dialog')
const backyard = document.getElementById('backyard')

const crash = new Audio('../assets/pianoCrash.mp3')

dialog.addEventListener('animationend', function(){
    setTimeout(function(){
        backyard.style.opacity = 1;
        backyard.style.animation = "glitch 4s steps(1, end) forwards";
    })
    backyard.addEventListener('animationend', function(){
        crash.play()
        dialog.innerHTML=""
        dialog.innerHTML="Oh... what a silent graveyard..."
    })
})

