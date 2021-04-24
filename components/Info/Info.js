import React from 'react';


const Info = () => {
    return (
        <div>
        <div className="about-box-main">
            <div className="container">
            <h2 className="noo-sh-title">
                <span></span>
            </h2>
            <div className="row my-5">
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                  <span>La importancia del refuerzo escolar y la regularización</span>
                </h2>
                <p>
                    Los cursos de regularización, son una opción si vas a presentar un examen extraordinario, necesitas clases personalizadas en una materia en específico como física, matemáticas y química o quieres tener el mismo nivel académico de tus compañeros de clase del bachillerato o universidad.
                </p>     
            </div>
            <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://image.freepik.com/vector-gratis/lecciones-linea-ninos_52683-36818.jpg"
                    alt=""
                    />
                </div>
            </div>
        </div>
        <div className="row my-5">
        <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://image.freepik.com/foto-gratis/muchacha-estudiante-adolescente-sobre-dedo-punteagudo-amarillo-al-lado_1368-40175.jpg"
                    alt=""
                    />
                </div>
            </div>
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                  <span>Primero, ¿qué es la regularización?</span>
                </h2>
                <p>
                Es una actividad fuera de las aulas escolares que permite la comprensión de las asignaturas, así como del contenido de las mismas, mediante la aplicación de un método de estudio adecuado a las necesidades de aprendizaje del alumno.
                <br />
                <br />
                La regularización aporta al alumno una mayor cantidad de aprendizaje en comparación con la que obtiene dentro del sistema educativo tradicional, donde está obligado a seguir el ritmo de aprendizaje de sus demás compañeros de clase.
                </p>
                <p>
                   <strong></strong>
                </p>
                <div className="actions">
                        <a href="../contact-us">
                        ¡Contactanos!
                        </a>
                </div>
                <style jsx>{`
                        .actions {
                            margin-top: 20px;
                            display: flex;
                            justify-content: flex-end;
                            }
                        .actions a {
                            color: #fff;
                            background: #f01b29;
                            padding: 16px 24px;
                            text-decoration: none;

                            margin: 0;
                            display: inline-block;
                            padding: 20px;
                            position: relative;
                            top: -20px;
                            left: -10px;
                            transform: rotateZ(-5deg);
                            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                            }
                            .actions a:hover{ 
                                
                                transform: scale(1.2)
                            }
                    `}
                    </style>
            </div>
         
        </div>
            
            {/* <OurTeam /> */}
        </div>
      </div>
        </div>
    );
}

export default Info;