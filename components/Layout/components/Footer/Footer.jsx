import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      {/* <InstagramFeed /> */}
      <footer className="site-footer">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="tituloEquipoTrabajo text-white b-b-3px-white my-4 text-center text-uppercase">
                Únete a nuestro equipo de trabajo
              </h2>
              <div className="row contenedor-vacantes-principal">
                <ul className="mb-0 contenedor-titulo-vacante w-100">
                  <li className="list-group-item active tituloVacantes" aria-current="true">
                    <i className="fa fa-check"></i>
                    Vacantes disponibles
                  </li>
                </ul>
                <div className="col-12 col-md-6 col-lg-4 p-0">
                  <ul className="p-5px">
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Docentes de inglés
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Matemáticas
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Química
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Biología
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-0">
                  <ul className="p-5px">
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Física
                    </li>
                    <li className="list-group-item active-vacante">
                      <i className="fa fa-thumb-tack"></i>
                      Álgebra
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Trigonometría
                    </li>
                    <li className="list-group-item">
                      -
                      &nbsp;
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-0">
                  <ul className="p-5px">
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Computación
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Docentes de preescolar
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-thumb-tack"></i>
                      Docentes de primaria
                    </li>
                    <li className="list-group-item">
                      -
                      &nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header tituloCV text-white">
                  <h4 className="card-title mb-0 p-1">Enviar CV a:</h4>
                </div>
                <div className="card-body correosCV">
                  <ul>
                    <li>
                      <a href="tomail:info@regularizacionclases.com">info@regularizacionclases.com</a>
                    </li>
                    <li>
                      <a href="tomail:tutoriaslzc@yahoo.com">tutoriaslzc@yahoo.com</a>
                    </li>
                    <li className="fst-italic">
                      <i className="fa fa-thumb-tack"></i>
                      O traer documentación a nuestras instalaciones
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row contenidoFooter justify-content-center footer-informacion">
            <div className="row mx-0 p-5 w-100">
              <div className="col-12 col-md-6 overflow-hidden">
                <h3 className="text-center text-uppercase mb-0 titulo-principal b-b-titulo-principal pb-0 mb-3">
                  <span>Sobre</span> Regularización de clases:
                </h3>
                <h4 className="mb-0 text-uppercase mb-4 text-center">
                  <span className="text-white">Dirección:</span>
                </h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.471885459347!2d-102.196537185107!3d17.956769690859733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84315de95005187b%3A0xfc3a76c03dfdcb0e!2sNicolas%20Bravo%20341%20Centro!5e0!3m2!1ses!2smx!4v1654610659670!5m2!1ses!2smx"
                  width="600"
                  height="450"
                  style={{
                    border: 0
                  }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p className="text-justify p-4 text-white">
                  Nicolas Bravo 341, Centro, <br /> Cd. Lázaro Cárdenas, Mich, MX.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h3 className="b-b-titulo-principal mb-4 text-uppercase titulo-principal pb-0 mb-3">
                  <span>Horarios </span>de atención:
                </h3>
                <div className="horarios-atencion">
                  <div className="d-flex align-items-center p-0">
                    <i className="fa fa-check"></i>
                    <span className="d-block">Lu. a Vi. de 07:00 am a 08:00 pm</span>
                  </div>
                  <div className="d-flex align-items-center p-0 mb-4">
                    <i className="fa fa-check"></i>
                    <span className="d-block">Sábados de 07:00 am a 02:00 pm</span>
                  </div>
                </div>
                <h3 className="b-b-titulo-principal mb-4 text-uppercase titulo-principal pb-0 mb-3">
                  <span>Teléfonos:</span>
                </h3>
                <ul className="p-2 links numeros-telefonicos">
                  <li>
                    <a href="tel:+52 (753) 537 1349">
                      &nbsp;<i className="fa fa-phone"></i>&nbsp;&nbsp;+52 (753) 537 1349
                    </a>
                  </li>
                  <li>
                    <a href="tel:+52 (753) 181 1195">
                      &nbsp;<i className="fa fa-phone"></i>&nbsp;&nbsp;+52 (753) 181 1195
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/7531683407"
                      target="_blank">
                      &nbsp;<i className="fab fa-whatsapp"></i>&nbsp;+52 (753) 168 3407
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-between ultimos-tweets mx-0 w-100">
              <h3 className="text-center text-uppercase titulo-principal b-b-titulo-principal mb-0 mb-3 w-100">
                <span>Últimas</span> Publicaciones:
              </h3>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/maestrosasesores/"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/maestrosasesores/" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/maestrosasesores/">Asesorías Educativas LZC</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/clasesregularizaciones"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/clasesregularizaciones" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/clasesregularizaciones">Clases de Regularización LC</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/todlersenglish"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/todlersenglish" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/todlersenglish">Inglés para peques</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/Electoescritura"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/Electoescritura" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/Electoescritura">Mtro Lzc Regularización</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/ClasesPersonalizadasLzc"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/ClasesPersonalizadasLzc" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/ClasesPersonalizadasLzc">Apoyo Social Educativo Lzc</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/ConsultoriasPsicologia"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/ConsultoriasPsicologia" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/ConsultoriasPsicologia">Elyn Consultoría Psicológica</a>
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-0 row overflow-hidden mx-auto mb-5">
                <div
                  className="fb-page p-0 w-100 d-flex justify-content-center"
                  data-href="https://www.facebook.com/ReclutamientoLZC"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/ReclutamientoLZC" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/ReclutamientoLZC">RH Reclutamiento Lzc, Mich.</a>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="row mx-0 w-100 justify-content-center">
              <div className="col-12 col-md-6">
                <h3 className="text-center text-uppercase titulo-principal b-b-titulo-principal pb-0 mb-3">
                  <span>Redes</span> sociales:
                </h3>
                <nav className="redes-sociales text-center mb-4">
                  <a
                    target="_blanck"
                    href="https://www.facebook.com/maestrosasesores/">
                    <i
                      className="fa fa-facebook"
                      aria-hidden="true"></i>
                  </a>
                  <a
                    target="_blanck"
                    href="https://twitter.com/icamar-constructora">
                    <i
                      className="fa fa-twitter"
                      aria-hidden="true"></i>
                  </a>
                  <a
                    target="_blanck"
                    href="https://api.whatsapp.com/send?phone=7531683407&amp;text=Hola!&nbsp;me&nbsp;pueden&nbsp;apoyar?">
                    <i
                      className="fa fa-whatsapp"
                      aria-hidden="true"></i>
                  </a>
                  <a
                    target="_blank" href="#">
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"></i>
                  </a>
                  <a
                    target="_blank" href="https://www.youtube.com/channel/UCl7HIZRNlJPgbO18pK6N_7A">
                    <i
                      className="fa fa-youtube"
                      aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
