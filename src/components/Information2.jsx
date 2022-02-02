import React from "react";
//import { Canvas } from "react-three-fiber";
import ImgTool2 from "./ImgTool2";
import Model2 from "./Model_2";

function Information2() {
  return (
    <div id="dropframe" className="information2">
      <div className="content-text">
        <div className="content-texto">
          <div className="tit-info">
            <h2>Dropframe pro</h2>
          </div>
          <p>
            Pocas cosas son más importantes que la seguridad del casco en Fox.
            Nuestros diseñadores, ingenieros, proveedores y deportistaspasar
            miles de horas validando colectivamente el rendimiento de cada casco
            que se envía desde nuestra bodega. Cada línea de diseño, molde de
            producción.y el producto final se desafía hasta el punto de
            agotamiento por instalaciones de prueba de terceros independientes y
            luego probado en la pista por nuestro equipo de élite de atletas
            globales. Los resultados están probados en el podio y cascos que
            inspiran confianza para ciclistas de todas las edades,estilos y
            habilidades.
          </p>
          <a
            target="_blanck"
            href="https://www.foxconceptstore.com/search?type=product%2Carticle%2Cpage%2Ccollection&q=CASCO+dropframe+pro"
            className="btn-fox"
          >
            Comprar Ahora
          </a>
        </div>
        <div className="content-img">
          <ImgTool2 />
          <canvas className="webglll"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Information2;
