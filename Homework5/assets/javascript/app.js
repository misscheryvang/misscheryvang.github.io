// I am aware that each answer is suppose to be a radio button but I was attempting to do the harder version and changed directions at the last minute, 
// hence clickable buttons instead.
$(document).ready(function () {

    var correct = 0;
    var wrong = 0;
    var unanswer = 0;

    // Objects that contains the questions/possible answers
    var trivia1 = {
        question: "Joey's pickup line is?",
        answers: ["I think we have connection stronger than my wifi",
            "How you doin",
            "If you were a vegetable you'd be a cutecumber",
            "Baby, your eyes are blue like the ocean, and I'm lost at sea"]
    };

    var trivia2 = {
        question: "Who peed on Monica after she got stung by a jellyfish?",
        answers: ["Joey", "Chanlder", "Richard", "ross"]
    };

    var trivia3 = {
        question: "Which two characters are sibilings in the show?",
        answers: ["Ross and Moncia", "Chanlder and Rachel", "Ross and Joey", "Rachel and phoebe"]
    };

    var trivia4 = {
        question: "How many failed marriages did Ross have?",
        answers: ["1", "2", "3", "4"]
    };

    var trivia5 = {
        question: "Who gave birth to their brother's triplets?",
        answers: ["Monica", "Rachel", "Phoebe", "Rachel's younger sister"]
    };

    var trivia6 = {
        question: "Who played Chanlder?",
        answers: ["Mark Wahlberg", "David Schwimmer", "Matt Damon", "Matthew Perry"]
    };

    var trivia7 = {
        question: "What city is the show in?",
        answers: ["San Francisco", "New York City", "Chicago", "New Orleans"]
    };

    var trivia8 = {
        question: "What car did Monica received from her father?",
        answers: ["Mercedes", "BMW", "Lexus", "Porshe"]
    };

    var trivia9 = {
        question: "Phoebe's twin sister name is?",
        answers: ["Ursula", "Brittney", "Janice", "Tiffany"]
    };

    var trivia10 = {
        question: "Who played Monica?",
        answers: ["Courteney Cox", "Jennifer Aniston", "Kate Hudson", "Drew Berrymore"]
    };


    var numQuest = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7, trivia8, trivia9, trivia10];

    var correctAns = ["How you doin", "Chanlder", "Ross and Moncia", "3", "Phoebe", "Matthew Perry",
        "New York City", "Porshe", "Ursula", "Courteney Cox"];

    function start() {
        $(".triviaQuestions").html("<button id='startButton'>Start</button>");
        $("#doneSpot").hide();
        $("#startButton").on("click", function () {
            $(this).hide();
            stopwatch.start();
            display();

        });
    }

    function display() {
        for (var i = 0; i < 10; i++) {
            var questDiv = $("<div>");
            var pQuest = $("<p>");
            pQuest.addClass("questFont")
            pQuest.text(numQuest[i].question);
            questDiv.append(pQuest);

            for (var k = 0; k < 4; k++) {
                var btn = $("<button>");
                btn.attr("data-answers", numQuest[i].answers[k]);
                btn.text(numQuest[i].answers[k])
                questDiv.append(btn);
            }

            $(".triviaQuestions").append(questDiv)
        }
    }

    var intervalId;

    // Our stopwatch object
    var stopwatch = {

        time: 30,

        reset: function () {

            stopwatch.time = 30;

            $("#display").text("30");
        },
        start: function () {

            intervalId = setInterval(stopwatch.count, 1000);

        },
        count: function () {

            var currentTime = stopwatch.time--;
            console.log(currentTime)

            $("#timer").text(currentTime + " seconds");

        }
    }

    function done() {
        var doneDiv = $("<div>");
        var pCorrect = $("<p>");
        pCorrect.text("Correct Answers: " + correct);
        var pWrong = $("<p>");
        pWrong.text("Wrong Answers: " + wrong);
        var pUnanswer = $("<p>");
        unanswer = 10 - (correct + wrong)
        pUnanswer.text("UnAnswers: " + unanswer);
        doneDiv.append(pCorrect);
        doneDiv.append(pWrong);
        doneDiv.append(pUnanswer);
        $(".triviaQuestions").html(doneDiv)
        $("#doneSpot").html("")
    }

    start();

    $(".triviaQuestions").on("click", "button", function () {
        if ($.inArray($(this).text(), correctAns) != -1) {
            correct++;
            console.log("Correct: " + correct)
        }
        else {
            wrong++;
            console.log("Wrong: " + wrong)
            console.log(stopwatch.count.time)
        }

        if (stopwatch.count.currentTime === 0) {
            done();
        }

    })

    $("#doneSpot").on("click", function () {
        done();
    })
});
