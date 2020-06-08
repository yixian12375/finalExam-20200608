$(document).ready(function () {
    setTable();
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        let splitText = inputDate.split("-");
        console.log(splitText)
        setMonthAndDay(splitText[1], splitText[2]);
        setTable();
    });
});

function setTable() {
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr>"+
        "<th>場次</th>"+
        "<th>時間</th>"+
        "<th>主題</th>"+
        "</tr>"
    );
    let topicCount = topicsArray.length;
    let oneDayMillliseconds = 24*60*60*1000;
    for (let x = 0; x < topicCount; x++) {
        let thisdate = new Date(stratDate.getTime()+7*x*oneDayMillliseconds);
        $("#courseTable").append(
            "<tr>"+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisdate.toLocaleDateString().slice(5)+"</td>"+
            "<td>"+topicsArray[x]+"</td>"+
            "</tr>"
        );
    }
}