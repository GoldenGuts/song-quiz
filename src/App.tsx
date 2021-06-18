import React, { Component, useState, useRef, useEffect } from 'react';
import './button.scss';

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
    audio.src = "https://r6---sn-ci5gup-qxas.googlevideo.com/videoplayback?expire=1624014609&ei=sSrMYNPrOf74juMPz8uEuA4&ip=182.69.12.28&id=o-ABwmxflj-RbIvgCnFDX16J9VJEOL313y78vtlEYYcpyB&itag=251&source=youtube&requiressl=yes&mh=Ep&mm=31%2C26&mn=sn-ci5gup-qxas%2Csn-cvh7kney&ms=au%2Conr&mv=m&mvi=6&pl=21&gcr=in&initcwndbps=1168750&vprv=1&mime=audio%2Fwebm&ns=evoIdd3k66apGar0-qKUPYwF&gir=yes&clen=2894340&dur=170.081&lmt=1617040297132480&mt=1623991965&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5511222&n=Cb4wjSF4Tuc8vjq0R&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKpIhygVhsG5TVv--xCkQ8tWl-0kbjsNvljTYw503LKgAiEAt8m0gsWJKhiKebHkSkWMDCwtASEzoVVsfYHHmMVkOmw%3D&sig=AOq0QJ8wRAIgRxHDnHfdzQVfzYh8bdA27sXJ1nvFUiyy4mHel_pwxBUCIGobcdZUi-WqyTEPeGXgJEz1QIhByNd8polf0C8ftpiu";
    audio.load();
    
    var change = document.getElementById("btnText");
    // @ts-ignore: Object is possibly 'null'.
    if (change.innerHTML == "Start"){ // @ts-ignore: Object is possibly 'null'. 
      change.innerHTML = "Stop";
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
