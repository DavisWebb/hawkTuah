const birdIMG = document.getElementById("larryIMG");
const tuahIMG1 = document.getElementById("hTuahIMG1");
const body = document.getElementById("body");
const nukeIMG = document.getElementById("nukeIMG");
const trb1 = document.getElementById("trb1");
const trb2 = document.getElementById("trb2");
const tuahSoundButton = document.getElementById("tuahSoundButton");

function larryBird() {
    trb1.style.display = 'none';
    trb2.style.display = 'block';
    tuahSoundButton.style.display = 'none';
    tuahIMG1.style.display = 'block';
    birdIMG.style.display = 'block';
    const tuah1Rect = tuahIMG1.getBoundingClientRect();
    const birdRect = birdIMG.getBoundingClientRect();
    let birdLeft = birdRect.left;
    const tuah1Left = tuah1Rect.left;
    const tuah1Top = tuah1Rect.top;

    const intervalID = setInterval(() => {
        if (birdLeft >= tuah1Left - 125) {
            clearInterval(intervalID);
            birdIMG.src = "images/nuke.avif";
            birdIMG.style.width = 45 + '%';
            tuahIMG1.style.display = 'none';
            return;
        }

        birdLeft += 5;
        birdIMG.style.left = birdLeft + 'px';
    }, 10);
}

function understoodBird() {
    window.location.reload();
}

var tuahAudio = new Audio('audioFiles/hawkTuahSound.mp3');
function playHawkTuah() {
    tuahAudio.play();
}