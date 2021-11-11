import React from "react";

export default function QuestionAndUserComponent(props) {
    return (
        <div className="d-flex justify-content-between">
            <div className="offset-1 mt-1">
                {props.data &&
                    props.data.map((item) => (
                        <div
                            key={item}
                            className="p-2 mx-1 bg-secondary rounded text-white badge"
                        >
                            {item}
                        </div>
                    ))}
            </div>
            <div>
                asked 33 sec ago
                <div>
                    <img
                        src="http://bestprofilepix.com/wp-content/uploads/2014/03/sad-and-alone-boys-facebook-profile-pictures.jpg"
                        height="35px"
                        className="rounded"
                        alt="avatar"
                    />
                    <span className="mx-2">Series Chikanbanjar</span>
                </div>
            </div>
        </div>
    );
}
