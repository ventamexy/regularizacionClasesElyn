import React from "react";

export default function PageTitleBox() {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Agenda tu cita con nosotros.</h2>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="contact-us">Contactanos</a>
              </li>
              {/* <li className="breadcrumb-item active"></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
