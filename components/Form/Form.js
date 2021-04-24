import React from "react";

export default function ContactUs() {
  return (
    <>
        <div className="about-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 rounded  border border-light bg-light text-dark">
                        <h2 className="noo-sh-title">Contactanos</h2>
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Nombre</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre completo" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Teléfono</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Teléfono" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Correo electrónico</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>               
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1"><strong>Escriba su mensaje</strong></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}