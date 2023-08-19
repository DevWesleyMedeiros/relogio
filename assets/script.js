var h = document.getElementById('hours')
var m = document.getElementById('minutes')
var s = document.getElementById('seconds')

function updateClock() {
    const time = new Date()
    hours = time.getHours()
    minutes = time.getMinutes()
    seconds = time.getSeconds()

    h.innerHTML = `${hours}:00 HORAS`
    m.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} MINUTOS`
    s.innerHTML = `${seconds < 10 ? "0" + seconds : seconds} MINUTOS`
}

setInterval(updateClock, 1000);


updateClock();
