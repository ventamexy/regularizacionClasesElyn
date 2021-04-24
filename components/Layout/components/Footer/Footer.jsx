import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      {/* <InstagramFeed /> */}
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>SOBRE ELYN CONSULTORES Y ACESORES</h4>
                  <p>
                  {/* <strong>Dirección.</strong><br /> */}
                    Nicolas Bravo 341. centro, Cd. Lázaro Cárdenas, Mich, Mx.
                  </p>
                  <p>
                     <strong>Horarios de atención.</strong><br />
                    <strong>Lunes a viernes de</strong>{" "}7:00am a 8:00pm.<br />
                    <strong>Sábados de</strong>{" "}7:00am a 2:00pm.
                  </p>
                  <p>
                  <strong>Teléfonos</strong>: (753) 537 3761, (753) 139 7277 y (753) 540 5810
                  </p>
                  
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i
                          className="fab fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>ÚLTIMAS PUBLICACIONES</h4>
                  <div class="fb-page" data-href="https://www.facebook.com/maestrosasesores" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/maestrosasesores" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/maestrosasesores">Asesorías Educativas LZC</a></blockquote></div>
                  {/* <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>Siguenos en redes sociales</h4>
                  
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
