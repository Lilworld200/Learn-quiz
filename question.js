export class Question {
  constructor(question, answer1, answer2, answer3, correctAnswer) {
    this.question = question;
    this.answers = [answer1, answer2, answer3]
    this.correctAnswer = correctAnswer
    this.userSelectedAnswer = null;
    this.isCorrect = false;

  }
o
  selectAnswer(button, callback) {
    this.userSelectedAnswer = button.textContent
    callback()
  }

  displaySelectedAnswer(button) {
    if (this.userSelectedAnswer === button.textContent) {
      button.id = 'selectedAnswer'
    } else {
      button.removeAttribute('id');
    }
  };

  checkIfCorrect() {
    if (this.correctAnswer === this.userSelectedAnswer) {
      this.isCorrect = true;

    } else {
      this.isCorrect = false;

    }


  };


}

export const questionBox = [];


const question1 = new Question(
  'What is the speed of light in a vacuum?', '3 x 10^8 meters per second', '3 x 10^6 meters per second', '3 x 10^10 meters per second', '3 x 10^8 meters per second'
)

const question2 = new Question('Which element is represented by the symbol "Na" on the periodic table?', 'Neon', 'Sodium', 'Nitrogen', 'Sodium')

const question3 = new Question(
  'What is the plural form of "child"?', 'Children', 'Childrens', 'Childs', 'Children'
)

const question4 = new Question(
  'What is the common name for the compound H2SO4?', 'Nitric acid', 'Sulfuric acid', 'Hydrochloric acid', 'Sulfuric acid'
)

const question5 = new Question(
  'What is the past tense of the verb "go"?', 'Gone', 'Went', 'Goes', 'Went'
)

const question6 = new Question(
  'What is the unit of electrical resistance?', 'Ampere', 'Ohm', 'Volt', 'Ohm'
)

const question7 = new Question(
  'What is the value of π (pi) to two decimal places?', '3.24', '2.16', '3.14', '3.14'
)

const question8 = new Question(
  'Which of the following is not a fundamental force in nature?', 'Electromagnetic', 'Gravitational', 'Frictional', 'Frictional'
)


questionBox.push(question1, question2, question3, question4, question5, question6, question7, question8)