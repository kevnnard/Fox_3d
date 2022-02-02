   var audio, playbtn, mutebtn, seek_bar;
    function initAudioPlayer() {
    audio = new Audio();
    audio.src = "/music/1.mp3";
    audio.loop = true;
    audio.pause();
    // Set object references
    playbtn = document.getElementById("playpausebtn");
    //mutebtn = document.getElementById("mutebtn");
    // Add Event Handling
    playbtn.addEventListener("click", playPause);
    //mutebtn.addEventListener("click", mute);
    // Functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(/img/off.png) no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(/img/on.png) no-repeat";
        }
    }
    // function mute() {
    //     if (audio.muted) {
    //         audio.muted = false;
    //         mutebtn.style.background = "url(/assets/img/mute.png) no-repeat";
    //     } else {
    //         audio.muted = true;
    //         mutebtn.style.background = "url(/assets/img/unmute.png) no-repeat";
    //     }
    // }
    }
window.addEventListener("load", initAudioPlayer)