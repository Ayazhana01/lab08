$(document).ready(function(){
    answers = ["2009", "Nazarbayev University", "JavaScript"];
    questions = ["Which year Nazarbayev University was founded?", "What is the name of the university?", "What is the programming language used for this quiz?"];
    choice_options = [["2009","2010","2011","2012"], ["Nazarbayev University", "Astana University", "Almaty University", "Kazakhstan University"], ["HTML", "CSS", "JavaScript", "Python"]];
    
    // Generate quiz questions
    for (let i = 0; i < questions.length; i++) {
        let questionHTML = "<div class='question'><p class='d'> Q" + (i + 1) + ". " + questions[i] + "</p>";
        for (let j = 0; j < choice_options[i].length; j++) {
            questionHTML += "<label><input type='radio' name='q" + (i + 1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>";
        }
        questionHTML += "</div>";
        $("#quiz-box").append(questionHTML);
    }
    
    countCorrect = 0;
    reset = false;
    
    $("button").click(function(event){
        for (let i = 0; i < questions.length; i++) {
            let selectedChoice = $("input[name=q" + (i + 1) + "]:checked").val();
            if (selectedChoice === answers[i]) {
                countCorrect++;
            }
        }
        $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 
});