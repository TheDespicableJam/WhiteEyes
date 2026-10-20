const dialog = document.getElementById('homeplate')
const items = document.getElementById('itemsTray')

window.addEventListener('load', function(){
    setTimeout(function(){
        dialog.style.animation = 'fadeIn 3s forwards'
    }, 500)
})

dialog.addEventListener('animationend', function(){
    items.style.animation = 'fadeIn 3s forwards'
})