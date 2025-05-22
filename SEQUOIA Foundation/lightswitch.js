let lightmode = localStorage.getItem('lightmode');
let popup = localStorage.getItem('status');

const lightswitch = document.getElementById('lightswitch');
const no = document.querySelector('.no');
const yes = document.querySelector('.yes');

lightswitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    popup = localStorage.getItem('status');
    if(lightmode !== "on" && popup !== "done") {
        showpopup();
    } else if (lightmode !== "on" && popup === "done") {
        enableLightmode();
    } else {
        disableLightmode();
    }
})


no.addEventListener("click", () => {
    closepopup();
})

yes.addEventListener("click", () => {
    enableLightmode();
    hidepopup();
})

/* Lightswitch */

const enableLightmode = () => {
    document.documentElement.classList.add('lightmode');
    localStorage.setItem('lightmode', 'on');
}

const disableLightmode = () => {
    document.documentElement.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'off');
}


/* Pop-up \/ */

const showpopup = () => {
    document.querySelector('.warn-pop').classList.add('pending');
}

const closepopup = () => {
    document.querySelector('.warn-pop').classList.remove('pending');
}

const hidepopup = () => {
    document.querySelector('.warn-pop').classList.remove('pending');
    localStorage.setItem('status', 'done');
}

if(lightmode === "on") {
    enableLightmode()
}
