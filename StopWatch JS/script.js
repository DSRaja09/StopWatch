const display = document.getElementById("display");
let timer = 0;
let startTimer = 0;
let elapsedtime = 0;
let isRunning = false;

function Start(){
    if (!isRunning){
        startTimer = Date.now() - elapsedtime;
        timer = setInterval(Update, 10);
        isRunning = true;
    }
}
function Stop(){
    if (isRunning){
        isRunning = false;
        clearInterval(timer);
        elapsedtime = Date.now() - startTimer;
    }
}
function Reset(){
    clearInterval(timer);
    startTimer = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function Update(){
    let cur_time = Date.now();
    elapsedtime = cur_time - startTimer;
    let hr = Math.floor(elapsedtime / (1000 * 60 * 60));
    let mi = Math.floor(elapsedtime / (1000 * 60) % 60);
    let se = Math.floor (elapsedtime / 1000 % 60);
    let mili = Math.floor(elapsedtime % 1000 / 10);

    hr = String(hr).padStart(2, "0");
    mi = String(mi).padStart(2, "0");
    se = String(se).padStart(2, "0");
    mili = String(mili).padStart(2, "0");

    display.textContent = `${hr}:${mi}:${se}:${mili}`;
}