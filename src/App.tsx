import React, { Component, useState, useRef, useEffect } from 'react';
import './app.scss';
import Button from './components/Button/Button.react';
import URLs from './backend/testResults/FinalStreamableURLs.json';
import axios from 'axios';

const App = () => {

  type Props = {
    e: React.MouseEvent<HTMLButtonElement>;
    // your props validation
  }
  
  type State = {
    // state types
  }
  const audio = new Audio();

  const [loggedIn, setLogin] = useState(false);
  const [loggedOut, setLogout] = useState(1);
  const [url, setURL] = useState(1);
  
  const handleLoginClick = () => {
    setLogin(true);
  };
  
  const handleLogoutClick = () => {
    setLogout(0);
  };
  
  const fetchSongs = async () => {
    const options = {
      url: 'http://127.0.0.1:5000/get-songs',
    }
    axios(options)
      .then(response => {
        console.log(response.status);
      });
  }
  const startQuiz = async () => {
    //audio.src = URLs.url1.toString();
    audio.load();
    console.log('CLICKED');
    var change = document.getElementById("textInsideButtons");
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
    // alert('I am NOOB')
  };
  
  const [start, setStart] = useState({startQuiz});
  const [fetch, setFetch] = useState({fetchSongs});

  const checkAnswer = (e: Props) => { 

  }

  return (
    <div className="App">
      <h1>SongTrivia</h1>
      <button className="score" onClick={fetchSongs}>Score:</button>
      <p className="questionRemaining">Loading Questions...</p>
      <Button className="start" label="Start" btnID="btnStart" onPress={start.startQuiz}></Button>
      <Button className="fecthSongs" label="Fetch Songs Now" btnID="btnFetchSongs" onPress={fetch.fetchSongs}></Button>
    </div>
  );
}

export default App;