// Task 3 Programmable questionnaire

const dataInput = {
    1: {
        question: "What is your marital status?",
        answer1: {
            label: "Single",
            nextQuestionId: 2
        },
        answer2: {
            label: "Married",
            nextQuestionId: 3
        },
    },
    2: {
        question: "Are you planning on getting married next year?",
        answer1: {
            label: "Yes",
            nextQuestionId: null
        },
        answer2: {
            label: "No",
            nextQuestionId: null
        },
    },
    3: {
        question: "How long have you been married?",
        answer1: {
            label: "Less than a year",
            nextQuestionId: null
        },
        answer2: {
            label: "More than a year",
            nextQuestionId: 4
        },
    },
    4: {
        question: "Have you celebrated your one year anniversary?",
        answer1: {
            label: "Yes",
            nextQuestionId: null
        },
        answer2: {
            label: "No",
            nextQuestionId: null
        },
    },
};

const question = document.querySelector('.question');
const answerFirst = document.querySelector('.answer-first');
const answerSecond = document.querySelector('.answer-second');
const container = document.querySelector('.container-2');

class Quiz {
    constructor(dataInput) {
        this.dataInput = dataInput;
        this.currentQuestionData = {};

        this.updateQuestionData(dataInput[1]);
    }

    setData(questionData) {
        this.currentQuestionData = questionData;
    }

    renderCurrentQuestion(questionData) {
        question.innerHTML = questionData.question;
        answerFirst.innerHTML = questionData.answer1.label;
        answerSecond.innerHTML = questionData.answer2.label;
    }

    updateQuestionData(questionData) {
        this.setData(questionData);
        this.renderCurrentQuestion(questionData);
    }

    nextQuestion(answer) {
        const nextQuestionId = this.currentQuestionData[answer].nextQuestionId;
        if(!nextQuestionId) {
            return alert('Thank you for the answers');
        }
        this.updateQuestionData(this.dataInput[nextQuestionId]);
    }
}

const quiz = new Quiz(dataInput);

const handleAnswerClickFn = (e) => {
    const { answer } = e.target.dataset;
    quiz.nextQuestion(answer);
}

answerFirst.addEventListener('click', handleAnswerClickFn);
answerSecond.addEventListener('click', handleAnswerClickFn);