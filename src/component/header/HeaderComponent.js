import React from "react";
import ButtonComponent from "../button/ButtonComponent";

export default function HeaderComponent(props) {
    return (
        <div className="d-flex justify-content-between w-100">
            {props.title ? props.title : "All Questions"}
            <ButtonComponent
                title={props.btnTitle ? props.btnTitle : "Ask Question"}
            />
        </div>
    );
}
