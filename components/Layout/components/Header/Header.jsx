import React from "react";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);
  return (
    <>
      <TopBar />
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light navbar-default bootsnav">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">
                <img src="images/logos/01.png" 
                className="logo" alt="" 
                width={150} height={90}/>
              </a>
            </div>
            <div className="collapse navbar-collapse w-100 flex-wrap" id="navbar-menu">
              <ul
                className="nav navbar-nav w-100 justify-content-center"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Inicio</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">Nosotros</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/our-services">
                    <a className="nav-link">Servicios</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/trabajosRealizados">
                    <a className="nav-link">Trabajos realizados</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/galeria">
                    <a className="nav-link">Galería</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact-us">
                    <a className="nav-link">Contacto</a>
                  </Link>
                </li>
              </ul>
              <ul
              className="nav navbar-nav w-100 justify-content-center contenedor-url-paginas-web"
              data-in="fadeInDown"
              data-out="fadeOutUp"
              >
                <li className="nav-item d-flex align-items-center">
                  <i className="fa fa-globe"></i>
                  <Link href="https://crecepsicologos.com">
                    <a className="nav-link" target="_blank">Crece Psicologos</a>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <i className="fa fa-globe"></i>
                  <Link href="https://empleosmexy.com">
                    <a className="nav-link" target="_blank">Empleos Mexy</a>
                  </Link>
                </li>
              </ul>
            </div>          
          </div>
        </nav>
      </header>
    </>
  );
}
