class timer {
    constructor() {}
    myFunction() {
        let countdown = document.getElementById('timer');
        let time = 59
        setInterval(function(){
            if (time > 0) {
                countdown.innerHTML = time;
                time = time - 1;
            } else {
                alert('Time is up! This message will keep showing up.');
            }
    }, 1000);
}
}
let testpage = new timer();