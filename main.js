const video = document.getElementById("video1");

//Play/pause
const btnPlayPause = document.getElementById("btnPlayPause");

//na dugme
function playPause() {
    let imgPlay = document.getElementById("imgPlay");

    if (imgPlay.src.match("img/play.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else if(imgPlay.src.match("img/repeat.png")){
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else {
        imgPlay.src = "img/play.png";
        video.pause();
    }
}
btnPlayPause.addEventListener("click",playPause);

//na video
function playPauseWithoutButton() {
    let imgPlay = document.getElementById("imgPlay");

    if (imgPlay.src.match("img/play.png")) {
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else if(imgPlay.src.match("img/repeat.png")){
        imgPlay.src = "img/pause.png";
        video.play();
    }
    else {
        imgPlay.src = "img/play.png";
        video.pause();
    }
}
video.addEventListener("click",playPauseWithoutButton);

//Speed
const imgGear = document.getElementById("imgGear");
const speed = document.getElementById("speed");

function changeSpeed(){
    if(speed.style.display == "none"){
        speed.style.display ="flex";
    }
    else{
        speed.style.display = "none";
    }
}
imgGear.addEventListener("click",changeSpeed)

//Set speed 0.5
const verySlow = document.getElementById("verySlow");
function setSpeedVerySlow () {
    video.playbackRate = "0.5";
}
verySlow.addEventListener("click",setSpeedVerySlow);

//Set speed 0.75
const slow = document.getElementById("slow");
function setSpeedSlow () {
    video.playbackRate = "0.75";
}
slow.addEventListener("click",setSpeedSlow);

//Set speed 1
const normal = document.getElementById("normal");
function setSpeedNormal () {
    video.playbackRate = "1";
}
normal.addEventListener("click",setSpeedNormal);


//Set speed 1.5
const fast = document.getElementById("fast");
function setSpeedFast () {
    video.playbackRate = "1.5";
}
fast.addEventListener("click",setSpeedFast);


//Set speed 2
const veryFast = document.getElementById("veryFast");
function setSpeedVeryFast () {
    video.playbackRate = "2";
}
veryFast.addEventListener("click",setSpeedVeryFast);

//Stop
const btnStop = document.getElementById("btnStop");
function stopVideo() {
    video.currentTime = "0";
}
btnStop.addEventListener("click",stopVideo);

//Sound
const imgSoundOn = document.getElementById("imgSoundOn");
const slider = document.getElementById("myRange");

function soundOnOf() {
    video.muted = !video.muted
    if (imgSoundOn.src.match("img/volume.png")) {
        imgSoundOn.src = "img/mute.png";
    }
    else {
        imgSoundOn.src = "img/volume.png";
        slider.value;
    }
}
imgSoundOn.addEventListener("click",soundOnOf);

// Sound range
slider.addEventListener("change",function(){
    video.volume = slider.value/100;
    if(slider.value == "0"){
        imgSoundOn.src = "img/mute.png";
    }
    else{
        imgSoundOn.src = "img/volume.png";
    }
})

//Time 
const totalDuration = document.getElementById("totalDuration");
const currDuration = document.getElementById("currDuration");
var totalTime = document.getElementById("totalTime");
var currentTime = document.getElementById("currentTime");


video.addEventListener("timeupdate",function(){
    let imgPlay = document.getElementById("imgPlay");
    let currDurationPos = video.currentTime/video.duration;
    currDuration.style.width = currDurationPos * 100 + "%";
    if(video.ended){
        imgPlay.src = "img/repeat.png";
    }
    // let currentTimeC = video.currentTime;
    // let currentTimeC2 = parseFloat(currentTimeC).toFixed(0);
    // currentTime.textContent = currentTimeC2 +"s";
})

function changeCurrTime(e) {
    const newTime = e.offsetX * video.duration / totalDuration.offsetWidth;
    video.currentTime = newTime;
}
totalDuration.addEventListener("click",changeCurrTime);

//Fullscreen
const btnFullScreen = document.getElementById("btnFullScreen");
const imgFullScreen = document.getElementById("imgFullScreen");
const main = document.querySelector(".main");

function fullScreen() {
    if (imgFullScreen.src.match("img/zoom.png")) {
        imgFullScreen.src = "img/exit-full-screen.png";
        main.requestFullscreen();
    }
    else {
        imgFullScreen.src = "img/zoom.png";
        document.exitFullscreen()
    }
}
btnFullScreen.addEventListener("click",fullScreen);

//Time
// window.addEventListener("load",function(){
//     var totalTimeC = video.duration;
//     var totalTimeC2 = parseFloat(totalTimeC).toFixed(0);
//     totalTime.textContent = totalTimeC2 + "s";
// })