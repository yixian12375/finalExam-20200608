
function clearMap() 
{
    for (let x = 0; x <= 400; x = x + 200) {
        for (let y = 0; y <= 400; y = y + 200)
            ctx.clearRect(x, y, 200, 200);
    }
    for (let i = 0; i < 10; i++) {
        mapArray[i] = 0;
    }
}
function mapIndex1() {
    $("h1").html("我要去左上角");
    $("#attack").hide();
    mapArray = [1,1,2,0,0,0,0,1,1];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "simplerpg/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 400;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX, currentImgMainY, 200, 200);
    }; 
    imgMonutain = new Image();
    imgMonutain.src = "simplerpg/images/material.png";
    imgMonutain.onload = function()
    {
        for(let x in mapArray) 
        {
            if(mapArray[x]==1) 
                ctx.drawImage(imgMonutain,0,193,32,32,x%3*200, Math.floor(x/3)*200, 200, 200);
        }  
    };
}

function mapIndex2() {
    $("h1").html("我要去右下角");
    $("#attack").hide();
    mapArray = [0,1,1,0,1,1,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "vimages/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX, currentImgMainY, 200, 200);
    }; 
    imgMonutain = new Image();
    imgMonutain.src = "simplerpg/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "simplerpg/images/Enemy.png";
    imgMonutain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray) {
                if(mapArray[x]==1) 
                {                                         //lock the point
                    ctx.drawImage(imgMonutain,0,193,32,32,x%3*200, Math.floor(x/3)*200, 200, 200);
                }                  //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
                else if(mapArray[x]==3)
                {
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200, Math.floor(x/3)*200, 200, 200);
                }
            }
        }   
    };
    $("#attack").click(function () { 
        let v = $("#attack").attr("value");
        if (v == "攻擊") 
        {
            enemy_die = true;
            if (enemy_die == true) 
            {
                mapArray = [0,1,1,0,0,0,0,1,2];
                ctx.clearRect(0, 400, 200, 200);
                ctx.clearRect(200, 200, 200, 200);
                ctx.clearRect(400, 200, 200, 200);
            }
            $("#attack").hide(500);
        }
        else if(v == "去選擇")
        {
            clearMap();
            mapArray = [0,0,0,0,0,0,0,4,0];
        }
        else
            location.reload();
    });
}

function mapIndex3() {
    $("h1").html("最後一關!");
    $("#attack").hide();
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "simplerpg/images/spriteSheet.png";
    currentImgMainX = 200;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX, currentImgMainY, 200, 200);
    }; 
    imgMonutain = new Image();
    imgMonutain.src = "simplerpg/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "simplerpg/images/Enemy.png";
    imgMonutain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray) {
                if(mapArray[x]==4) 
                    ctx.drawImage(imgEnemy,275,40,75,135,x%3*200, Math.floor(x/3)*200, 200, 200);
            }
        }   
    };
}