const keys ={
    effect(kCode) {
	
	let modifyKey = document.querySelectorAll(`[data-key="${kCode}"`);
	modifyKey[1].play();

	let toggleKey = function(){
	    modifyKey[0].classList.toggle('playing');
	};
	toggleKey();
	setTimeout (toggleKey, 80);


    },
    
};

const keyHandler = (ev) => {

    if (!(document.querySelector(`[data-key="${ev.keyCode}"`))){
	return null;
    }
    return (keys.effect(ev.keyCode));
};

document.body.addEventListener ('keydown', keyHandler);

