// 歌词显示隐藏
$(function() {
    $(".crl").click(function() {
        $(this).hide();
        $(".ycdz").slideDown(100);
        $(".crl1").show();
    });
    $(".crl1").click(function() {
        $(this).hide();
        $(".ycdz").slideUp(100);
        $(".crl").show();
    });
});
//  音乐播放按钮
$(function() {
    $(".btn-play").click(function() {
        $(this).hide();
        $(".btn-zt").show();
    });
    $(".btn-zt").click(function() {
        $(this).hide();
        $(".btn-play").show();
    });
});

// 音乐的开关
var audio = document.getElementById("musicg");



function playAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function upVolume() {
    audio.volume = 1;
}

function downVolume() {
    audio.volume = 0.3;
}


// 视频的开关

var video = document.getElementById("video");
// 播放
function playVideo() {
    video.play();
}
// 暂停
function pauseVideo() {
    video.pause();
}
// 停止
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
// 快放
function speedUp() {
    video.play();
    video.playbackRate = 2;
}
//慢放
function speedMan() {
    video.play();
    video.playbackRate = 0.5;
}
// 正常
function speedZC() {
    video.play();
    video.playbackRate = 1;
}
function upVolume() {
    video.volume += 0.1;
}
//减小声音，每次减小1/10
function downVolume() {
    video.volume -= 0.1;
}

//     function makeBig()
// { 
//     video.width=1000; 
// } 
//     function makeSmall()
// { 
//     video.width=320; 
// } 
//     function makeNormal()
// { 
//     video.width=640; 
// } 

// document.addEventListener("webkitfullscreenchange", function () {

// fullscreenState.innerHTML = (document.webkitIsFullScreen)? "" : "not ";}, false);

// if (video.webkitRequestFullScreen) {

// video.webkitRequestFullScreen();

// }else if (document.webkitCancelFullScreen) {

// document.webkitCancelFullScreen();

// }



