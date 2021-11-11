import React from "react";
import ButtonComponent from "../button/ButtonComponent";
import QuestionAndUserComponent from "./QuestionAndUserComponent";

export default function QuestionCardComponent(props) {
    return (
        <div key={props.data.id}>
            <div className="row">
                <div className="col-1 text-center">
                    {props.data.answers.length}
                    <div>answers</div>
                </div>
                <div className="col-11">
                    {props.questionShow === undefined && (
                        <ButtonComponent
                            variant="text"
                            className="text-info text-decoration-none"
                            title={props.data.question}
                            handleclick={props.handleclick}
                        />
                    )}
                    <div>
                        {props.showDescription
                            ? props.data.description
                            : `${props.data.description.substring(0, 200)}...`}
                    </div>
                    {/* <div>{props.data.answers[0].answer}</div> */}
                </div>
            </div>
            <QuestionAndUserComponent
                data={props.data.key}
                time={"asked 33 sec ago"}
                user={"Series Chikanbanjar"}
            />
            <hr />
        </div>
    );
}
