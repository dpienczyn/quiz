function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Ile lat żyje pawian gwinejski?", ["30-40", "50-60","15-20", "10-15"], "15-20"),
    new Question("Rekin biały ma bardzo czuły węch. Potrafi wyczuć jedną kroplę krwi w ____ wody.", ["115 l", "50 l", "100 l", "200 l"], "115 l"),
    new Question("Wieloryby są największymi zwierzętami zamieszkującymi _____?", ["Ziemię", "Ocean","Atlantyk", "Morze"], "Ziemię"),
    new Question("gatunek węża z rodziny dusicieli, występujący w ___________?", ["Ameryce Północnej", "Ameryce Południowej", "Afryce", "Azji"], "Ameryce Południowej"),
    new Question(" U dużych krokodyli mózg zajmuje do _____ objętości puszki mózgowej.", ["60%", "20%", "30%", "80%"], "60%")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();