

var user = {};
var responses = [];


//write a function that will ask for the user’s name and save the answer in the user object

function yourName() {
  var name = prompt('What is your name?')
  user.name = name;
}

yourName();


//write a yes or no question


function question1() {
	var q1 = prompt('United States of America consists of 50 states')

		if (q1.toLowerCase() ==='yes') {
			q1=true;
		}
		

		else if (q1.toLowerCase() ==='no'){
			q1=false;
		}
	
		else {
			alert('Please answer with either Yes or No');
			return question1();
		}

		responses.push(q1);
}

question1();


//Multiple choice question. The options should be included in the question and the user will type in their response. A few guidelines:
//give at least three options
//convert the answer to lowercase
//use a switch statement to mark their answer as either true or false
//provide a default case in the switch statement
//save the result in the responses object

function question2(){
	var q2=prompt('Which day does Christmas fall on? Please select a, b or c for your answer.  A) 23  B) 24  C) 25')
			if (q2.toLowerCase() ==='c'){
				q2=true;
			}

			else if (q2.toLowerCase() ==='a' || q2.toLowerCase() ==='b') {
				q2=false;
			}

			else {
				alert('Please answer with either a b or c')
			return question2();
			}

			responses.push(q2);
}

question2();


function question3(){
	var q3=prompt('Which day does New Years fall on? Please select a, b or c for your answer.  A) 30  B) 25  C) 31')
			if (q3.toLowerCase() ==='c'){
				q3=true;
			}

			else if (q3.toLowerCase() ==='a' || q3.toLowerCase() ==='b') {
				q3=false;
			}

			else {
				alert('Please answer with either a b or c')
			return question3();
			}

			responses.push(q3);
}

question3();



function question4(){
	var q4=prompt('Are cats the best?')
			if (q4.toLowerCase() ==='yes'){
				q4=true;
			}

			else if (q4.toLowerCase() === 'no') {
				q4=false;
			}

			else {
				alert('Please answer with either yes or no')
			return question4();
			}

			responses.push(q4);
}

question4();

//write a function to report the user’s results
//the function should accept the responses array as a parameter, then loop through the array and count how many are correct answers (true) and how many are incorrect (false)
//save the totals for correct and incorrect answers in the user array
//use console.log() or alert() to display a message to the user with their name, the number of correct answers, and the number of incorrect answers

function evaluateResults(resultsArray){
	var correctCount = 0;//variable for counting correct responses here
	var incorrectCount = 0;//variable for counting false responses here

	for (i=0; i<resultsArray.length; i++) {
		
		if (resultsArray[i]===true) {  //if i==true then add +1 to the var for correct counting responses
			//create key in object user for correct
			correctCount+=1;
		}

		else {
			//create key in object user for incorrect
			incorrectCount+=1;
		}//if i==false then add +1 to the var for counting incorrect responses

	}

	user.correct=correctCount;
	user.incorrect=incorrectCount;

}

evaluateResults(responses);


alert('You have ' + user.correct + ' answers correct and ' + user.incorrect + ' answers incorrect');





// call the function, passing it the responses array
//evaluate(responses);


