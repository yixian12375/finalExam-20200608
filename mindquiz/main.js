$(document).ready(function () {
    let currentQuiz = null;
    $("#startButton").click(function () { 
        if (currentQuiz == null) {
            currentQuiz = 0;
            $("#question").text(questions[0].question); //questions's question content
            $("#options").empty();
            for (let x = 0; x < questions[0].answers.length; x++) {  //questions's answer quantity
                $("#options").append(
                    "<input name='options' type='radio' value=>" +x+  //using single quotes avoid double quotes wrong coding
                    "<label>" + questions[0].answers[x][0] +
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value", "Next");
        }else{
            $.each(
                $(":radio"),function(i, val){  //travel each radio (i = index, val = value)
                    if(val.checked){ //true = chosen number
                        if (isNaN(questions[currentQuiz].answers[i][1])) { //isNAN = is not a number
                            let finalResult = questions[currentQuiz].answers[i][1]; //take the ABCD
                            $("#question").text(finalAnswers[finalResult][0]);  //[ABCD][room1]
                            $("#options").empty();
                            $("#options").append(finalAnswers[finalResult][1] + "<br><br>");  //[ABCD][room2]
                            currentQuiz = null;
                            $("#startButton").attr("value", "Restart");
                        }else{
                            currentQuiz = (questions[currentQuiz].answers[i][1])-1; //current answer[room1][next number]
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for (let x = 0; x < questions[currentQuiz].answers.length; x++) {
                                $("#options").append(
                                    "<input name='options' type='radio' value =>" +x+
                                    "<label>" + questions[currentQuiz].answers[x][0] +
                                    "</label><br><br>"
                                );
                            }
                        }
                        return false; //force to end the travel each
                    }
                }
            );
        }
    });
});





