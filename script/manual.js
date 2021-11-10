var tickAudio = new Audio("../Audio/tick.mp3")


function trigger_sound(){
    tickAudio.volume = 0.8;
    tickAudio.autoplay = "true";
    //tickAudio.muted = true;
    tickAudio.play();    
}