function Quiz(question){
	this.score = 0;
	this.question = question;
	this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function(){
	return this.question[this.questionIndex];
}
Quiz.prototype.isEnded = function(){
	return this.question.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer){
	this.questionIndex++;
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
}