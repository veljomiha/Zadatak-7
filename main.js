const video = document.getElementById("video1");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnGear = document.getElementById("btnGear");
const speed = document.getElementById("speed");
const main = document.getElementById("main");
const verySlow = document.getElementById("verySlow");
const slow = document.getElementById("slow");
const normal = document.getElementById("normal");
const fast = document.getElementById("fast");
const veryFast = document.getElementById("veryFast");
const btnStop = document.getElementById("btnStop");
const imgSoundOn = document.getElementById("imgSoundOn");
const slider = document.getElementById("myRange");
const totalDuration = document.getElementById("totalDuration");
const currDuration = document.getElementById("currDuration");
var totalTime = document.getElementById("totalTime");
var currentTime = document.getElementById("currentTime");
const btnFullScreen = document.getElementById("btnFullScreen");
const imgFullScreen = document.getElementById("imgFullScreen");


//on button
btnPlayPause.addEventListener("click", function(){
    let imgPlay = document.getElementById("imgPlay");

    if (imgPlay.src.match("img/play.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else if (imgPlay.src.match("img/repeat.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else {
        imgPlay.src = "img/play.png";
        video.pause();
    }
})

//on video
video.addEventListener("click",function() {
    let imgPlay = document.getElementById("imgPlay");

    if (imgPlay.src.match("img/play.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else if (imgPlay.src.match("img/repeat.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else {
        imgPlay.src = "img/play.png";
        video.pause();
    }
})

//Speed
btnGear.addEventListener("click", function() {
    if (speed.style.display == "flex") {
        speed.style.display = "none";
    }
    else {
        speed.style.display = "flex";
    }
})

main.addEventListener("mouseleave",function(){
    speed.style.display = "none";
})

verySlow.addEventListener("click",function() {
    video.playbackRate = "0.5";
})
slow.addEventListener("click", function(){
    video.playbackRate = "0.75";
})
normal.addEventListener("click", function() {
    video.playbackRate = "1";
})
fast.addEventListener("click", function(){
    video.playbackRate = "1.5";

})
veryFast.addEventListener("click", function(){
    video.playbackRate = "2";
});

//Stop
btnStop.addEventListener("click", function(){
    video.currentTime = "0";
})

//Sound
imgSoundOn.addEventListener("click", function(){
    video.muted = !video.muted
    if (imgSoundOn.src.match("img/volume.png")) {
        imgSoundOn.src = "img/mute.png";
        slider.value = 0;
    }
    else {
        imgSoundOn.src = "img/volume.png";
        slider.value;
    }
})

// Sound range
slider.addEventListener("change", function () {
    video.volume = slider.value / 100;
    if (slider.value == "0") {
        imgSoundOn.src = "img/mute.png";
    }
    else {
        imgSoundOn.src = "img/volume.png";
    }
})

//Time 
function totalTimeVideo(){
    var totalTimeFloat = parseFloat(video.duration).toFixed(0);
    var minutes = Math.floor(totalTimeFloat / 60);
    var seconds = totalTimeFloat % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    totalTime.innerHTML = `${minutes}:${seconds}`;
}

function currentTimeVideo(){
    var currTimeFloat = parseFloat(video.currentTime).toFixed(0);
    var minutes = Math.floor(currTimeFloat / 60);
    var seconds = currTimeFloat % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTime.innerHTML = `${minutes}:${seconds}`;
}

window.addEventListener("load", function () {
    totalTimeVideo();
    currentTimeVideo();
})
video.addEventListener("timeupdate", function () {
    let imgPlay = document.getElementById("imgPlay");
    let currDurationPos = video.currentTime / video.duration;
    currDuration.style.width = currDurationPos * 100 + "%";
    if (video.ended) {
        imgPlay.src = "img/repeat.png";
    }
    currentTimeVideo();
})

totalDuration.addEventListener("click", function(e){
    const newTime = e.offsetX * video.duration / totalDuration.offsetWidth;
    video.currentTime = newTime;
})

//Fullscreen
btnFullScreen.addEventListener("click", function(){
    if (imgFullScreen.src.match("img/zoom.png")) {
        imgFullScreen.src = "img/exit-full-screen.png";
        main.requestFullscreen();
    }
    else {
        imgFullScreen.src = "img/zoom.png";
        document.exitFullscreen();
    }
})
