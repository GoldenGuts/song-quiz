import React, { Component, useState, useRef, useEffect } from 'react';
import './button.scss';
import URLs from './testResults/FinalStreamableURLs.json';

const App = () => {

  type Props = {
    e: React.MouseEvent<HTMLButtonElement>;
  }
  let audio = new Audio();

// const Player = (props) => {
//   const audioEl = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//       if (isPlaying) {
//           audioEl.current.play();
//       } else {
//           audioEl.current.pause();
//       }
//   });

  const startQuiz = async () => {
    audio.src = URLs.url1.toString();
    audio.load();
    
    var change = document.getElementById("btnText");
    // @ts-ignore: Object is possibly 'null'.
    if (change.innerHTML == "Start"){ // @ts-ignore: Object is possibly 'null'. 
      change.innerHTML = "Stop";
      audio.currentTime = 120;
      audio.play();
    }
    // @ts-ignore: Object is possibly 'null'.
    else { // @ts-ignore: Object is possibly 'null'. 
      change.innerHTML = "Start";  
      audio.pause();
    }
  }

  const checkAnswer = (e: Props) => { 

  }

  return (
    <div className="App">
      <h1>SongTrivia</h1>
      <div className="outerButton" onClick={startQuiz}>
        <div className="button">
          <p className="texts" id="btnText">Start</p>
        </div>
      </div>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
    </div>
  );
}

export default App;
