function startGame(){
    let S = prompt("TIME FORMAT");
    let C = 0;
    let s = 0;
    let Time = document.getElementById("Time");
    let CPS = document.getElementById("CPS");
    let title = document.getElementById("title");
    let cps = 0;

    let timerId = setInterval(time, 50);
    function time(){
        title.innerText = "CLICK FASTER!!!";
        title.style.color = "green";
        s = s+0.05;
        cps = (C / s);
        CPS.textContent = cps;
        let TimeLeft = S-s;
        let TimeLeftR = Math.round(TimeLeft)
        if (TimeLeft >= 0){
            Time.textContent = TimeLeftR;
        }
        else{
            cps = parseFloat(cps);
            if(cps<=3){
                title.innerText = "YOUR RANK IS TURTLE \uD83D\uDC22";
            } else if( cps<=5 && cps>3){
                title.innerText = "YOUR RANK IS PANDA \uD83D\uDC3C";
            } else if(cps<=7 && cps>5){
                title.innerText = "YOUR RANK IS RABBIT \uD83D\uDC30";
            } else if(cps<=9 && cps>7){
                title.innerText = "YOUR RANK IS BUFFALO \uD83D\uDC03";
            } else if(cps>9&& cps<=11){
                title.innerText = "YOUR RANK IS CHEETAH \uD83D\uDC06";
            } else if(cps>11&& cps<=13){
                title.innerText = "YOUR RANK IS FALCON \uD83E\uDD85";
            } else if(cps<13 &&cps>=11){
                title.innerText = "YOUR RANK IS CAR \uD83D\uDE97\uD83D\uDCA8";
            } else if(cps>=13&&cps<20){
            title.innerText = "YOUR RANK IS FORMULA 1 \uD83C\uDFCE\uFE0F\uD83C\uDFC1"; 
            } else if(cps>=20&&cps<50){
            title.innerText = "YOUR RANK IS ROCKET \uD83D\uDE80"; 
            }else if(cps>=50){
            title.innerText = "YOUR RANK IS AUTO CLICKER \uD83D\uDDB1\uFE0F"; 
            }
    

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
            C = C+1;
        }
        else {
            return;
        }
    });

    document.addEventListener('touchstart', (e) => {
        if(s >0 && (S-s) >0){
            if (event.touches.length >= 2) {
                C = C;
            } else{
                C = C + 1;
            }
            return;
        }
    });
}
startGame();

