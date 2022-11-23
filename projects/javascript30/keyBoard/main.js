function removeTransition(event){
    if (event.propertyName !== 'transform') return; // 过滤其中一种事件
    event.target.classList.remove('press'); 
}

function playSound(event){
    const audio = document.querySelector(`audio`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    key.classList.add('press');
    audio.currentTime =0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitioned',removeTransition));
window.addEventListener('keydown', playSound);