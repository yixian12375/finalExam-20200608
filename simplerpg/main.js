let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMonutain, imgMain, imgEnemy;
let mapIndex = 1;
let enemy_die = false;

$(document).ready(function() {
    mapIndex1();
    $("#attack").click(function(){
        if (mapIndex == 1) {
            clearMap();
            mapIndex2();
            mapIndex++;
        }
        else if (mapIndex == 3) {
            clearMap();
            mapIndex3();
        }
    });
});

$(document).keydown(function(event) { 
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault(); 
    switch (event.originalEvent.code) {  //canvas init left top
        case "ArrowLeft":
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200
            cutImagePositionX = 365;    
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    if (targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0) {
        targetBlock = targetImgMainX/200+targetImgMainY/200*3   //go to the point that you wonder to go
    } 
    else {
        targetBlock = -1;
    }
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if (targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 || mapArray[targetBlock]==4) {  //stay oringinal position because of obstacle
        //none
    } 
    else {
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }                       //let character can move itself direction
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX, currentImgMainY, 200, 200);
    switch (mapArray[targetBlock]) {
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            if(mapIndex == 1) 
            {
                $("#attack").show(500); 
                $("#attack").attr("value", "下一關");
            }
            else if(mapIndex == 2) 
            {
                $("#attack").show(500); 
                $("#attack").attr("value", "去選擇");
                mapIndex++;
            }
            break;
        case 3:
            $("#talkBox").text("敵人");
            $("#attack").show(500);
            $("#attack").attr("value", "攻擊");  
            break;
        case 4:
            $("#talkBox").text("NPC大人");
            $("#attack").show(500);
            $("#attack").attr("value", "重玩");  
            break;
    }
});

