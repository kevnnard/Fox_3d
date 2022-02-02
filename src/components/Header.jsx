import React, { useRef, useState} from "react";
import styles from '../css/styles.module.css'
import clsx from 'clsx';

// Publc/utils
import video from '/videos/1.mp4'
import video2 from '/videos/2.mp4'
import logoPng from '/img/logoW.png'


function Header() {

  const [playing, setPlaying] = useState(false)
  const [playing2, setPlaying2] = useState(false)

  const videor1 = useRef()
  const videor2 = useRef()

  const handlePLay = () => {
    if (playing) {
      videor1.current.pause();
      audio.current.pause()
    }
    if (!playing) {
      videor1.current.play();
    }
    setPlaying(!playing)
  }
 const playerClassName = clsx(styles.play, {
   [styles.hidden]: playing,
 })
   const handlePLay2 = () => {
     if (playing2) {
       videor2.current.pause();
     } else {
       videor2.current.play();
     }
     setPlaying2(!playing2);
   };
 const playerClassName2 = clsx(styles.play, {
   [styles.hidden2]: playing2,
 })
 
  return (
    <>
      <div id="up" className="bg-video">
        <video
          className="v1"
          loop
          width="100%"
          height="100%"
          src={video}
          ref={videor1}
        ></video>
        <div className="ref-video1">
          <button className={playerClassName} onClick={handlePLay}></button>
        </div>
        <video
          className="v2"
          ref={videor2}
          loop
          width="100%"
          height="100%"
          src={video2}
        ></video>
        <div className="ref-video2">
          <button  className={playerClassName2} onClick={handlePLay2}></button>
        </div>

        {/* <div className="tit-video">
          <h1>
            <img src={logoPng}/>
            Bienvenidos a FOX CONCEPT STORE
          </h1>
        </div> */}
      </div>
    </>
  );
}

export default Header;
