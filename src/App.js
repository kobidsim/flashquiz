import React, { useState } from "react";
import FlashCardList from "./FlashCardList";

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_DATA);

  return (
    <>
      <FlashCardList flashcards={flashCards} />
    </>
  );
}

const SAMPLE_DATA = [
  {
    id: 1,
    question: "What is 1+1?",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 2,
    question: "What is 3+3?",
    answer: "6",
    options: [
      "3",
      "1",
      "4",
      "6"
    ]
  },
  {
    id: 3,
    question: "What's 9+10?",
    answer: "21",
    options: [
      "19",
      "20",
      "21",
      "69"
    ]
  }
];

export default App;
