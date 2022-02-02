import React from 'react'
import "../css/ImgTool.css";

function ImgTool() {
    return (
      <section>
        <div className="container">
          <img src="/img/p1.jpg" />
          <div className="all-tooltiip">
            <div className=" tooltiip tooltiip-1">
              <div className="pin">
                <ion-icon name="add-circle"></ion-icon>
              </div>
              <div className="tooltiip-content">
                <div className="arrowe"></div>
                <div className="img">
                  <img src="" />
                </div>
                <div className="content">
                  <h1>cierre magnetico</h1>
                  <p>mayor seguridad en el ajuste</p>
                </div>
              </div>
            </div>
            <div className=" tooltiip tooltiip-2">
              <div className="pin">
                <ion-icon name="add-circle"></ion-icon>
              </div>
              <div className="tooltiip-content">
                <div className="arrowe"></div>
                <div className="img">
                  <img src="https://cdn.shopify.com/s/files/1/0264/9161/7361/files/visor-icon.png?v=1640719033" />
                </div>
                <div className="content">
                  <h1>visera ajustable</h1>
                  <p>ajustes fáciles a mitad de recorrido</p>
                </div>
              </div>
            </div>
            <div className=" tooltiip tooltiip-3">
              <div className="pin">
                <ion-icon name="add-circle"></ion-icon>
              </div>
              <div className="tooltiip-content">
                <div className="arrowe"></div>
                <div className="img">
                  <img src="https://cdn.shopify.com/s/files/1/0264/9161/7361/files/mips-icon.png?v=1640713100" />
                </div>
                <div className="content">
                  <h1>sistema MIPS</h1>
                  <p>
                    El MIPS BPS permite que la cabeza se mueva dentro del casco,
                    lo que puede reducir el movimiento de rotación dañino que de
                    otro modo se transfiere al cerebro.
                  </p>
                </div>
              </div>
            </div>
            <div className=" tooltiip tooltiip-4">
              <div className="pin">
                <ion-icon name="add-circle"></ion-icon>
              </div>
              <div className="tooltiip-content">
                <div className="arrowe"></div>
                <div className="img">
                  <img src="https://cdn.shopify.com/s/files/1/0264/9161/7361/files/360-ret-icon.png?v=1640740656" />
                </div>
                <div className="content">
                  <h1>ajuste 360</h1>
                  <p>ajuste superior y facil</p>
                </div>
              </div>
            </div>
            {/* <div className=" tooltiip tooltiip-5">
              <div className="pin">
                <ion-icon name="add-circle"></ion-icon>
              </div>
              <div className="tooltiip-content">
                <div className="arrowe"></div>
                <div className="img">
                  <img src="" />
                </div>
                <div className="content">
                  <h1>Titulo 5</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis perspiciatis nesciunt iste, id quos similique
                    aut tempora eum cumque necessitatibus eos nihil, placeat
                    totam aperiam dolorum ex atque illum dolores!
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
}

export default ImgTool
