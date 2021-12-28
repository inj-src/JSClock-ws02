const secondHand = document.getElementsByClassName('leg1')[0]
const minHand = document.getElementsByClassName('leg2')[0]
const hourHand = document.getElementsByClassName('leg3')[0]

function setDate() {
    const now = new Date();
    const secDeg = ((360/60) * now.getSeconds()) + 90;
    console.log(now.getSeconds());
    secondHand.style.transform = `var(--translate) rotate(${secDeg}deg)`

    const minDeg = ((360/60) * now.getMinutes()) + 90;
    minHand.style.transform = `var(--translate) rotate(${minDeg}deg)`

    let hourDeg = ((360/12) * now.getHours()) + 90;
        hourDeg += now.getMinutes() / 2 
    hourHand.style.transform = `var(--translate) rotate(${hourDeg}deg)`
    console.log(hourDeg);

}

setInterval(setDate, 1000);

setDate();