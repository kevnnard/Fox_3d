import { useState } from 'react'
import Marquee from "react-fast-marquee";

//components 
import Header from './components/Header'
import Information from './components/Information'
//import Slider from './components/Slider'

// get our fontawesome imports
import { faArrowUp, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import CarruselOrbit from './components/CarruselOrbit';
import { color } from 'dat.gui';


function App() {
  const [count, setCount] = useState(true)

  return (
    <>
      <div className="hero">
        {/* <Marquee gradient={false} direction="down">
          <p className="marquee">Zona de desplazamiento </p>
        </Marquee> */}
        <a className="scroll-down">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arroww">
            <span></span>
          </div>
          <div className="arroww2">
            <a href="#up">
              <span></span>
            </a>
          </div>
        </a>
      </div>
      <Header></Header>
      <>
        <CarruselOrbit />
      </>
      <>
        <Information />
      </>
      <>{/* <Slider /> */}</>
      <div className="song-cont">
        <h4>
          Sound Cloud{" "}
          <span>
            <FontAwesomeIcon icon={faCloud} />
          </span>
        </h4>
        <button id="playpausebtn"></button>
        {/* <button id="mutebtn"></button> */}
      </div>
      {/* <div className="boton-up">
        <a href="#carrusel">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div> */}
    </>
  );
}

export default App
