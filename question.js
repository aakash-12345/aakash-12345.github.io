var myQuestions = [
    {
        question: "Q1. What is the rate of discount if a car which price was $4,000 was sold for $3,200 ?",
        answers: {
            a:'14%',
            b:'16%',
            c:'18%',
            d:'20%'
        },
        correctAnswer: 'd'
    },
    {
        question: "Q2. What is the value of x in the equation 3x – 15 – 6 = 0 ?",
        answers: {
            a: '7',
            b: '8',
            c: '9',
            d: '-9'
        },
        correctAnswer: 'a'
    },
    {
	question:"Q3. Find the square of 112",
	answers: {
	    a: '11244',
            b: '12544',
            c: '13544',
            d: '14544'
	},
	correctAnswer: 'b'
    },
    {
	question:"Q4. When a point is observed, the angle formed by the line of sight with the horizontal level where the point being viewed is above the horizontal plane is known as:",
	answers: {
	    a: 'Angle of triangle',
            b: 'Angle of depression',
            c: 'Angle of elevation',
            d: 'None of these'
	},
	correctAnswer: 'c'
    },
    {
	question:"Q5. Which term of the progression 4,9,14,…. Is 109 ?",
	answers: {
	    a: '20',
            b: '18',
            c: '12',
            d: '22'
	},
	correctAnswer: 'd'
    },
    {
	question:"Q6. Solve for x :   2x + y = 8,    y= - 6",
	answers: {
	    a: '16',
            b: '4',
            c: '6',
            d: '7'
	},
	correctAnswer: 'd'
    },
    {
	question:"Q7. If cot A = 12/5, then the value of (sin A + cos A) x cosec A is :",
	answers: {
	    a: '1',
            b: '17/5',
            c: '13/5',
            d: '14/5'
	},
	correctAnswer: 'b'
    },
    {
	question:"Q8. In a lottery there are 10 prizes and 20 blank. What is the probability of getting prize?",
	answers: {
	    a: '1/3',
            b: '1',
            c: '1/10',
            d: '1/2'
	},
	correctAnswer: 'a'
    },
    {
	question:"Q9. The HCF of two numbers a and b is 30, while their LCM is 45. What is the value of (a x b) ?",
	answers: {
	    a: '1350',
            b: '1255',
            c: '1355',
            d: '1250'
	},
	correctAnswer: 'a'
    },
    {
	question:"Q10. 106 × 106 – 94 × 94 = ?",
	answers: {
	    a: '2004',
            b: '2400',
            c: '1904',
            d: '1906'
	},
	correctAnswer: 'b'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var reloadquiz = document.getElementById('reload');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
       
        var output = [];
        var answers;

        
        for(var i=0; i<questions.length; i++){
            
            
            answers = [];

            
            for(letter in questions[i].answers){

                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]+"<br>"
                        +'</label>'

                );
            }

            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

      
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        var userAnswer = '';
        var numCorrect = 0;
        
       
        for(var i=0; i<questions.length; i++){

            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
               
                answerContainers[i].style.color = '#48bd18';
            }
            
            else{
                
                answerContainers[i].style.color = 'red';
            }
        }

        
        resultsContainer.innerHTML = 'You got ' + numCorrect + ' points out of ' + questions.length + ' points ';
    }
    
    function reloadQuiz(){
      
       location.reload();
     }

   
    showQuestions(questions, quizContainer);
    
   
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
    
    
    reloadquiz.onclick =function(){
        reloadQuiz();
    }


}