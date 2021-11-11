import React from "react";
import QuestionCardComponent from "../../component/cards/QuestionCardComponent";
import { questions } from "../../data/questions";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../../component/header/HeaderComponent";

export default function Home() {
    const history = useHistory();
    const handleClick = (item) => {
        console.log("on click", item);
        history.push({ pathname: "/question", state: { data: item } });
    };
    return (
        <div>
            Home
            <HeaderComponent />
            <div>27 questions</div>
            <hr />
            <div>
                {questions.map((item) => {
                    return (
                        <div
                            className="d-flex justify-content-center"
                            key={item.id}
                        >
                            <div className="w-75">
                                <QuestionCardComponent
                                    data={item}
                                    handleclick={() => handleClick(item)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
