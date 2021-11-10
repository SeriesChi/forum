import React from 'react';
import ButtonComponent from '../../component/button/ButtonComponent';
import QuestionCardComponent from '../../component/cards/QuestionCardComponent';
import { questions } from '../../data/questions';

export default function Home() {
    return (
        <div>
            Home
            <div className="d-flex justify-content-between w-100">
                All Questions
                <ButtonComponent title="Ask Question" />
            </div>
            <div>
                27 questions
            </div>
            <hr />
            <div>
                {questions.map((item) => {
                    return(
                        <QuestionCardComponent data={item} />
                    )
                })}
            </div>
        </div>
    )
}
