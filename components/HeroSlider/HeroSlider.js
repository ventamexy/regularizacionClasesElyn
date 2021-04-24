import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="https://image.freepik.com/foto-gratis/emocionada-colegiala-hispana-teniendo-idea_23-2148224786.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  ¿Dificultades con las matemáticas?<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                ¡Nosotros te asesoramos!<br />
                Contamos con asesorías en diversas materias para los niveles de:
                Primaria, secundaria, preparatoria y universidad.
                ¡Ven y conócocenos!{" "}
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="https://images.pexels.com/photos/6437841/pexels-photo-6437841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Asesoría Académica<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                <strong>
                Apoyo en tareas y refuerzo en la materia que requieras. inglés, biología matemáticas, español y química. nivel primaria, secundaria y preparatoria contamos con todas las medidas sanitarias.
                </strong> 
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="https://image.freepik.com/foto-gratis/retrato-joven-maestro-sobre-fondo-claro_99433-2422.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Se brinda apoyo con tareas a niña@s de nivel primaria <br />
                  </strong>

                </h1>
                <p className="m-b-40">
                Lecto-escritura, vocabulario, ortografía , español , inglés y matemáticas.<br />
                  {" "}
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="text-right">
          <img src="images/servicios/04-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                  {" "}
                  <br />
                  
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}

      </ul>
      {/* <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div> */}
    </div>
  );
}
