import React, { useState, useEffect } from "react";
import FlashCardList from "./FlashCardList";
import "./app.css"
import axios from 'axios';
import NavBar from './NavBar.js';

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_DATA);

  useEffect(
    ()=>{
      axios
        .get("https://opentdb.com/api.php?amount=20")
        .then((res)=>{
          setFlashCards(res.data.results.map((questionItem, index)=>{
            const answer = decodeString(questionItem.correct_answer);
            const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer];

            return(
              {
                id: `${index}-${Date.now()}`,
                question: decodeString(questionItem.question),
                answer: questionItem.correct_answer,
                options: options.sort(()=> Math.random() - .5)
              }
            );
          }))
        })
    },
    []
  );
  return (
    <>
      <NavBar />
      <div className="container">
        <FlashCardList flashcards={flashCards} />
      </div>
    </>
  );
}

function decodeString(str){
  const textArea = document.createElement('textArea')
  textArea.innerHTML = str
  return textArea.value
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
