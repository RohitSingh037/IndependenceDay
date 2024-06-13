var div = document.querySelector(".main")
function getrandomcolor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}

function changecolor(){
    div.style.color = getrandomcolor()
    }

setInterval(changecolor, 1000)


function insertvalue(){
    const d1 = new Date()
    const d2 = new Date(d1.getFullYear(), 7, 15)
    const diff = (d2 - d1)/1000
    const month = Math.floor(diff/60/60/24/30)
    const day = Math.floor((diff/60/60/24)%30)
    const hour = Math.floor((diff/60/60)%24)
    const min = Math.floor((diff/60)%60)
    const sec = Math.floor(diff%60)

    document.getElementById("month").innerHTML = month
    document.getElementById("day").innerHTML = day
    document.getElementById("hour").innerHTML = hour
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec
}
setInterval(insertvalue, 1000)