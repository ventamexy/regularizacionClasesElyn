import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

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
      {/* <PageTitleBox /> */}
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
                <span>Nosotros</span>
              </h2>
              <p>
              Ofrecemos servicio de tutorías, que cubre todos los niveles académicos, desde preescolar hasta niveles universitarios. Además, ofrece tutorías o entrenamiento para ejecutivos y personas de la tercera edad en temas específicos y personalizados.
              </p>
              <p>
                
              </p>
            </div>
            {/* <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/nosotros/11.jpg"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          {/* <div className="row my-5">
            <div className="col-lg-6">
                <h2 className="noo-sh-title">
                <span></span>
                </h2>
                <p>
                </p>
                <p>
                  
                </p>
              </div>
              <div className="col-lg-6">
                <h2 className="noo-sh-title">
                <span></span>
                </h2>
                <p>
                </p>
                <p>
                  
                </p>
              </div>
            </div> */}
          {/* <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div> */}
          {/* <OurTeam /> */}
          <Servicios />
        </div>
      </div>
    </>
  );
}
