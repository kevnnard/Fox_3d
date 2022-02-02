import React from 'react'


import ImgTool from './ImgTool';
import Model from './Model';

 
function Information() {
    return (
      <div id="speedframepro" className="information">
        <div className="content-text">
          <div className="content-texto">
            <div className="tit-info">
              <h2>SPEEDFRAME PRO</h2>
            </div>
            <p>
              Pocas cosas son más importantes que la seguridad del casco en Fox.
              Nuestros diseñadores, ingenieros, proveedores y deportistaspasar
              miles de horas validando colectivamente el rendimiento de cada
              casco que se envía desde nuestra bodega. Cada línea de diseño,
              molde de producción.y el producto final se desafía hasta el punto
              de agotamiento por instalaciones de prueba de terceros
              independientes y luego probado en la pista por nuestro equipo de
              élite de atletas globales. Los resultados están probados en el
              podio y cascos que inspiran confianza para ciclistas de todas las
              edades,estilos y habilidades.
            </p>
            <a
              target="_blanck"
              href="https://www.foxconceptstore.com/search?type=product%2Carticle%2Cpage%2Ccollection&q=CASCO+speedframe+pro"
              className="btn-fox"
            >
              Comprar Ahora
            </a>
          </div>
          <div className="content-img">
            <ImgTool />
            <canvas className="webgllll"></canvas>
          </div>
        </div>
      </div>
    );
}

export default Information
