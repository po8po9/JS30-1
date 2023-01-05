const keys ={
    effect(kCode) {
	
	let modifyKey = document.querySelectorAll(`[data-key="${kCode}"`);
	modifyKey[1].play();
	modifyKey[0].classList.toggle('playing');
	
    },

    endEffect(kCode){
	document.querySelector(`./keys.[data-key="${kCode}"`).classList.toggle('playing');
    }
};

const keyHandler = (ev) => {

    if (!(document.querySelector(`[data-key="${ev.keyCode}"`))){
	return null;
    }
    if (ev.keyCode == 'keyup'){return (keys.endEffect(ev.keyCode))}
    return (keys.effect(ev.keyCode));
};

['keydown', 'keyup'].forEach((event) =>{document.body.addEventListener (event, keyHandler);});

