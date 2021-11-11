import React from "react";
import HeaderComponent from "../../component/header/HeaderComponent";
import { useLocation } from "react-router-dom";
import QuestionAndUserComponent from "../../component/cards/QuestionAndUserComponent";
import QuestionCardComponent from "../../component/cards/QuestionCardComponent";

export default function Question() {
    const location = useLocation();
    const question = location.state && location.state.data;
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75">
                <HeaderComponent
                    title={question.question}
                    btnTitle="AskQuestion"
                />
                <hr />
                <div>
                    <QuestionCardComponent
                        questionShow={false}
                        data={question}
                        showDescription={true}
                    />
                </div>
                <input type="text" />
            </div>
        </div>
    );
}
