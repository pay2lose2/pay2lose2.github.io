let time = document.getElementById("time")

function settime() {
    const event = new Date();
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: "Europe/Warsaw"
    };
    let pltime = event.toLocaleString(undefined, options)

    time.innerHTML = pltime
}

setInterval(settime, 100);