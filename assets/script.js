// variable list 
let startBtn = document.getElementById('startBtn');
let startScreen = document.getElementById('startScreen');
let q1 = document.getElementById('q1');
let countdownEl = document.getElementById('countdownEl');
let count = 60;
let questionpageNum = 1;

// if the timer runs out
function jumpToSubmit () {
    document.getElementById('submitScoreScreen').classList.remove("hidethis");
}

// function to transition through pages 
function turnThePage() {
    document.getElementById(`q${questionpageNum}`).classList.add("hidethis");
    questionpageNum++;
    document.getElementById(`q${questionpageNum}`).classList.remove("hidethis");
}

// this is the start button
startBtn.addEventListener('click', function() {
    q1.classList.remove("hidethis")
    startScreen.classList.add("hidethis")
    console.dir(countdownEl)
    let interval = setInterval(function() {
        countdownEl.innerHTML = count
        count-- 
        if (count <= 0) {
            // placeholder
            alert("You've run out of time.");
            clearInterval(interval)
            jumpToSubmit();
        }
    }, 1000)
});

// this is a time decrementer 
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('false')) {
        count -= 15
        countdownEl.innerHTML = count
        turnThePage();
        alert('JigSaw laughs');
    }
    if (event.target.classList.contains('true')) {
        turnThePage();
        alert('JigSaw is silent');
    }
});