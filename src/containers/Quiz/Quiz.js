import React, {Component} from "react";
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
        {
            question: 'Sky color?',
            rightAnswerId: 2,
            id: 1,
            answers: [
                {text: 'black', id: 1},
                {text: 'blue', id: 2},
                {text: 'red', id: 3},
                {text: 'yellow', id: 4}
            ]
        },
        {
            question: 'In what year St. Petersburg was established?',
            rightAnswerId: 3,
            id: 2,
            answers: [
                {text: '1700', id: 1},
                {text: '1702', id: 2},
                {text: '1703', id: 3},
                {text: '1803', id: 4}
            ]
        }
    ]
}

onAnswerClickHandler = answerId => {

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

        this.setState({
            answerState: {[answerId]: 'success'}
        })

        const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
                console.log('Finished')
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }
            window.clearTimeout()
        }, 1000)


    } else {
        this.setState({
            answerState: {[answerId]: 'error'}
        })
    }

}

isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }



    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all question</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.quiz.length}
                        answerNumber = {this.state.activeQuestion + 1}
                        state = {this.state.answerState}
                    />

                </div>
            </div>
        );
    }
}

export default Quiz