import React from 'react';
import Card from './card';
import './question.css';

const Question =() => {
    return (
        <Card>
            <h1 className="question">Example Question</h1>

            <div className="answers">
                <div className="answer"><p>Answer</p></div>
                <div className="answer"><p>Answer</p></div>
                <div className="answer"><p>Answer</p></div>
                <div className="answer"><p>Answer</p></div>
            </div>

            <p className="score">
                Score: <span>0</span>
            </p>

            <p className="question_number">
                Question <span>1</span>/10
            </p>
        </Card>
    )
}
export default Question;