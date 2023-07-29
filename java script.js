var index = 0;
var i = 1;
var pa = "pause";
var p = "play_arrow"
function showCode() {
    if (index == 0) {
        document.getElementById("2").innerHTML = pa;
        document.getElementById("1").style.display = "block";
        var audio = document.getElementById("myAudio");
        audio.play();
        index++;
    }
    else {
        document.getElementById("1").style.display = "none";
        var audio = document.getElementById("myAudio");
        audio.pause();
        index = 0;
    }
}

function play() {
    if (i == 0) {
        document.getElementById("2").innerHTML = pa;
        var audio = document.getElementById("myAudio");
        audio.play();
        i++;
    }
    else {
        document.getElementById("2").innerHTML = p;
        var audio = document.getElementById("myAudio");
        audio.pause();
        i = 0;
    }
}