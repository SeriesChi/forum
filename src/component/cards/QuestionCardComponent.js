import React from 'react'

export default function QuestionCardComponent(props) {
    return (
        <>
            <div className="row">
                <div className="col-1">
                    {props.data.answers.length}
                    <div>answers</div>
                </div>
                <div className="col-11">
                    <a className="text-info text-decoration-none">{props.data.question}</a>
                    <div>{props.data.answers[0].answer}</div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>asked 33 sec ago
                <div>
                    <img
                        src="http://bestprofilepix.com/wp-content/uploads/2014/03/sad-and-alone-boys-facebook-profile-pictures.jpg"
                        height="35px"
                    />
                    <span>Series Chikanbanjar</span>
                </div>
                </div>
            </div>
        </>
    )
}
