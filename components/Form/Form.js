import React from "react";

export default function ContactUs() {
  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h2 className="centrar-texto mt-5">Contacto</h2>
            </div>
            <div className="row justify-content-md-center">
                <div className="rounded border border-light bg-light text-dark p-5">
                    <form className="frmPrecalificacion">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label for="Nombre"><strong>Nombre</strong></label>
                                    <input 
                                    type="text" 
                                    name="nombre"
                                    className="form-control"/>
                                    <span className="campoObligatorio">Campo obligatorio</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label for="Apellido paterno"><strong>Apellido paterno</strong></label>
                                    <input 
                                    type="text" 
                                    name="apellidoPaterno"
                                    className="form-control"/>
                                    <span className="campoObligatorio">Campo obligatorio</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label for="Apellido materno"><strong>Apellido materno</strong></label>
                                    <input 
                                    type="text" 
                                    name="apellidoMaterno"
                                    className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-12 col-md-6 col-lg-3">
                                <label for="nombre">Email:</label>
                                <input 
                                type="email" 
                                name="email"
                                className="form-control"/>
                                <span className="campoObligatorio">Campo obligatorio</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12">
                                <label for="Mensaje"><strong>Escriba su mensaje</strong></label>
                                <textarea 
                                className="form-control"
                                rows="8"
                                name="mensaje"></textarea>
                                <span className="campoObligatorio">Campo obligatorio</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button 
                            className="btn btn-success btnEnviarPrecalificacion" 
                            type="button">
                                Enviar solicitud
                            </button>
                        </div>
                    </form>
                </div>
                <div className="cargaSpinner d-none">
                    <div className="circleA">
                        <div className="circleB"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}