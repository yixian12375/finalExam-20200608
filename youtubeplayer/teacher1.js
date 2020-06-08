var player;
var currentPlay = 0;

$(document).ready(function () {
    onYouTubeIframeAPIReady();
});

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",
    {
        // height:"700",
        // width:"1450",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":1,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,//title
            "rel":0,//related video
            "iv_load_policy":3//註解式行銷
        },
        events:{
            "onReady":playerPlay,
            "onStateChange":playerFinish
        }
    });
}

function playerPlay(event) {
    player.playVideo();
}

function playerFinish(event) {  
    if (Math.floor(player.getPlayerState()) == 0) { //end
        if (currentPlay == 0){ //op
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "start":playTime[currentPlay][0],
                "end":playTime[currentPlay][1],
                "ueggestedQuality":"large"
            });
        }
    }
    else if (Math.floor(player.getPlayerState()) == 2) { //pause
        if (currentPlay == 0){ //op
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "start":playTime[currentPlay][0],
                "end":playTime[currentPlay][1],
                "ueggestedQuality":"large"
            });
        }
    }      
}

