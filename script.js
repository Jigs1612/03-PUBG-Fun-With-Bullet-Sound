`use strict`;
document.addEventListener("click", function(e) {
    let body = document.querySelector('body');
    let bullet = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    body.appendChild(bullet);

    let audio = document.querySelector('#audio');
    audio.play();
})