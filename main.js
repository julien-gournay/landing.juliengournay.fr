//const text = document.querySelector('h1'); // AFFICHAGE COMPTE A REBOURS


function getChrono(){
    const now = new Date().getTime();
    const countdownDate = new Date('March 25, 2023 18:00:00 GMT+01:00').getTime(); //CHANGER LA DATE ET HEURE
    //console.log(now, countdownDate);

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    //console.log(days);
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    //console.log(hours);
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    //console.log(minutes);
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);
    //console.log(seconds);

    //console.log(days, hours, minutes, seconds);
    text.innerText = `J${days} H${hours} M${minutes} S${seconds}`;
    //console.log(distanceBase);


    if (days <= 0) {
        text.innerText = `H${hours} M${minutes} S${seconds}`;
    }
    if (days <= 0 & hours <= 0) {
        text.innerText = `${minutes}:${seconds}`;
    }
    if (days <= 0 & hours <= 0 & minutes <= 0) {
        text.innerText = `${seconds}`;
        parent.removeChild(h1);
    }
    if (distanceBase <= 0) {
        text.innerText = 'Patience, site en maintenance';
    }
    
}

getChrono()

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000);