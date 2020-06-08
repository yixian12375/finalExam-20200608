var food_name = ["拉麵","滷肉飯","水餃"]

$(document).ready(function () {
    $("input").click(function () { 
        let list_number = $(food_name).length;
        let random_number = Math.floor(Math.random()*list_number);
        let img_index=(random_number + 1)
        $("h1").text(food_name[random_number]);
        $("#bottom").attr("src", "randomselector/image/" + img_index + ".jpg");
    });
    
    $("img").hover(
        function () {
            let index=$("img").index(this);
            $("p").text(food_name[index]);
        }, 
        function () {
            $("p").text("");
        }
    );
    
});

