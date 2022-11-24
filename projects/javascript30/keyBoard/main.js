function playSound(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio`);

    key.classList.add('playing');
    audio.currentTime =0;
    audio.play();
}
function removeStyle(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeStyle);