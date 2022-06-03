import { useState } from "react";
import "./app.css";

function FlashCard({flashCard}){
    const [flip, setFlip] = useState(false);

    return(
        <div
            className={`card ${flip ? "flip": ""}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashCard.question}
                <div className="options">
                    {flashCard.options.map((option)=>{
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">
                {flashCard.answer}
            </div>
        </div>
    );
}

export default FlashCard;