import FlashCard from "./FlashCard";

function FlashCardList ({ flashcards }) {
    return(
        <div className="card-grid">
            {flashcards.map((flashCard)=>{
                return(<FlashCard flashCard={flashCard} key={flashCard.key} />);
            })}
        </div>
    );
}

export default FlashCardList;