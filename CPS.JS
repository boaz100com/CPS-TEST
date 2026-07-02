function startGame(){
    let S = prompt("TIME FORMAT");
    let C = 0;
    let s = 0;
    let Time = document.getElementById("Time");
    let CPS = document.getElementById("CPS");
    let title = document.getElementById("title");
    let cps = 0;

    let timerId = setInterval(time, 200);
    function time(){
        title.innerText = "CLICK FASTER!!!";
        title.style.color = "green";
        s = s+0.2;
        let TimeLeft = S-s;
        let TimeLeftR = Math.round(TimeLeft)
        if (TimeLeft >= 0){
            Time.textContent = TimeLeftR;
        }
        else{
            title.innerText = "STOP CLICKING";
            title.style.color = "red";
            clearInterval(timerId);
            return;
        }
    }

    function startGame(){
        let S = prompt("TIME FORMAT");
        let timerId = setInterval(time, 200);
    }

    document.addEventListener('click', (e) => {
        if(s >0 && (S-s) >0){
            C = C + 1;
            let cps = (C / s);
            CPS.textContent = cps;
        }
        else {
            return;
        }
    });

    document.addEventListener('touchstart', (e) => {
        if(s >0 && (S-s) >0){
            C = C + 1;
            let cps = (C / s);
            CPS.textContent = cps;
        }
        else {
            return;
        }
    });
}
startGame();

