import { Question, questionBox } from '/question.js';

let idxNo = 0;

function calculateResult() {
  let total = 0

  questionBox.forEach((question) => {
    if (question.isCorrect === true) {
      total++
    }
  })

  return total
}

function renderResultHTML(callback) {
  let result = callback()
  let resultHTML = ''
  resultHTML = `
   <div class="resultContainer">
        You scored ${result} out of ${questionBox.length}
   </div>

      `
  document.body.innerHTML = resultHTML;
}

function renderQuestionHTML() {
  let questionDisplay = ''
  questionDisplay = `
   
  <div class="parent-container">
    
  <div class="question-container">
    <p>${questionBox[idxNo].question}</p>
  </div>
  
  <div class="button-container">
    <button class = "js-AnswerButton"
    }>${questionBox[idxNo].answers[0]}</button>
    <button class = 'js-AnswerButton'>${questionBox[idxNo].answers[1]}</button>
    <button class = 'js-AnswerButton'>${questionBox[idxNo].answers[2]}</button>
  </div>
  
  <div class="nav-container">
    <button class="navigation prev" id = 'Previous' >Prev</button>
    <button class="navigation next" id = 'Next'>Next</button>
  </div>
     
   </div>
   `
  document.body.innerHTML = questionDisplay

  renderEventListners()
}

renderQuestionHTML()

function renderEventListners() {
  //this first one is for all the answer button
  const AnswerButtons = document.querySelectorAll('.js-AnswerButton');
  // this runs a for each loop that waits for user to pick an answer and also displays thoer answer in another colour design 
  AnswerButtons.forEach((button) => {
    button.addEventListener('click', (event) => questionBox[idxNo].selectAnswer(event.target, renderQuestionHTML));
    questionBox[idxNo].displaySelectedAnswer(button)
  })


  // this is the event listner for the nav button
  const NavButtons = document.querySelectorAll('.navigation');

  NavButtons.forEach((navButton) => {
    navButton.addEventListener('click', (event) => navigation(event.target));

  })

  //this checks if the users decision is correct 

  questionBox[idxNo].checkIfCorrect()

}


function navigation(navButton) {
  if (navButton.id === 'Previous') {
    if (idxNo <= 0) {
      idxNo = 0;
      return
    };
    idxNo--;
    renderQuestionHTML();
  } else if (navButton.id === 'Next') {
    if (idxNo >= questionBox.length - 1) {
      renderResultHTML(calculateResult)
      return
    }
    idxNo++;
    renderQuestionHTML();
  }
}