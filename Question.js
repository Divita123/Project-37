class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No....");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(140, 133);
    this.option1.html("1: Everyone " );
    this.option1.position(280, 180);
    this.option2.html("2: Envelope" );
    this.option2.position(490, 180);
    this.option3.html("3: Estimate " );
    this.option3.position(280, 250);
    this.option4.html("4: Example" );
    this.option4.position(495, 240);

    this.input1.position(220, 320);
    this.input2.position(480, 320);
    this.button.position(405, 320);

      this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
