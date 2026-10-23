const dialogues = document.getElementById('dialogues');
const di1 = document.getElementById('di1');
const di2 = document.getElementById('di2');
const eye = document.getElementById('eye');
const end = document.getElementById('endingLog')

setTimeout(function() {
    di1.style.animation = 'fadeIn 2s linear forwards';
}, 1000);

di1.addEventListener('animationend', function(event) {
    if (event.animationName !== 'fadeIn') return;

    setTimeout(function() {
        di2.style.animation = 'fadeIn 2s linear forwards';
    }, 1000);
});

di2.addEventListener('animationend', function(event) {
    if (event.animationName !== 'fadeIn') return;

    setTimeout(function() {
        dialogues.style.animation = 'fadeOut 2s linear forwards';
    }, 1000);
});

dialogues.addEventListener('animationend', function(event) {
    if (event.target !== dialogues ||
        event.animationName !== 'fadeOut') return;

    dialogues.style.display = 'none';

    setTimeout(function() {
        eye.style.animation = 'fadeIn 2s linear forwards';
        eye.style.display = 'block';
        setTimeout(function(){
            end.style.display = ''
            end.style.animation = 'fadeIn 2s linear forwards'
        }, 2000)
    }, 1000);
});
