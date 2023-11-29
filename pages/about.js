import React from "react";
import dynamic from "next/dynamic";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
import Acreditacion from "../components/Acreditacion/Acreditacion"
import Servicios from "../components/Servicios/Servicios"
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      <div className="about-box-main">
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://image.freepik.com/foto-gratis/maestra-feliz-alumnos-fondo_1098-2917.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                <span>Nosotros hola</span>
              </h2>
              <p>
                Ofrecemos servicio de tutorías, que cubre todos los niveles académicos, desde preescolar hasta niveles universitarios. Además, ofrece tutorías o entrenamiento para ejecutivos y personas de la tercera edad en temas específicos y personalizados.
              </p>
              <p></p>
            </div>
          </div>
          <Servicios />
        </div>
      </div>
    </>
  );
}
