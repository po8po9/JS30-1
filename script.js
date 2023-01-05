const keyDown = (ev) => {
    
    if (!(document.querySelector(`[data-key="${ev.keyCode}"`))){return;}

    let box = document.querySelector(`.key[data-key="${ev.keyCode}"`);
    let audio = document.querySelector(`audio[data-key="${ev.keyCode}"`);
    box.classList.toggle('playing');
    audio.currentTime=0;
    audio.play();
    
};
const keyUp = (ev) => {
    if (!(document.querySelector(`[data-key="${ev.keyCode}"`))){return;}

    let box = document.querySelector(`.key[data-key="${ev.keyCode}"`);
    box.classList.toggle('playing');
}

window.addEventListener ('keydown', keyDown);
window.addEventListener ('keyup', keyUp);


