import React from 'react'

// Style css
import '../css/carrusel.css'

function CarruselOrbit() {
    return (
      <>
        <div className="orbit">
            <div className="slider">
              <div className="wrapper">
                <div className="item item1 active">
                  <div className="item__info">
                    <p className="item__year">
                      <span>MTB 2022</span>
                    </p>
                    <p className="item__name">
                      <span>SPEEDFRAME PRO</span>
                    </p>
                    <a href="#speedframepro" className="btn">
                      <span>Ver más...</span>
                    </a>
                  </div>
                </div>
                <div className="item item2">
                  <div className="item__info">
                    <p className="item__year" 
                    // style="color:chocolate">
                      ><span>DOWN HILL 2022</span>
                    </p>
                    <p className="item__name" 
                    // style="color:black">
                      ><span>DROPFRAME PRO</span>
                    </p>
                    <a href="#dropframe" className="btn">
                      <span>Ver más...</span>
                    </a>
                  </div>
                </div>
                <div className="item item3">
                  <div className="item__info">
                    <p className="item__year">
                      <span>MTB 2022</span>
                    </p>
                    <p className="item__name">
                      <span>MAINFRAME</span>
                    </p>
                    <a href="#mainframe" className="btn">
                      <span>Ver más...</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="arrow arrow-next"></div>
              <div className="arrow arrow-prev"></div>
            </div>
        </div>
      </>
    );
}

export default CarruselOrbit
