import "../styles/Menu.css";
import homeLogo from "../assets/no_background2.png";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import v5 from "../assets/v5.png";
import v6 from "../assets/v6.png";
import v7 from "../assets/v7.png";
import v8 from "../assets/v8.png";
import v9 from "../assets/v9.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomCarousel from "./components/slider/slider";

export const Menu: React.FC<{ selectedCategory?: string }> = ({
  selectedCategory = "Octubre",
}) => {
  const [currentCategory, setCurrentCategory] =
    useState<string>(selectedCategory);
  const galeria_meses = ["Octubre", "Noviembre", "Diciembre"];
  const ActivateButton = (text: string) => {
    setCurrentCategory(text);
  };

  const NavigateToMenu = (text: string): string => {
    switch (text) {
      case "Octubre":
        return "galeria/octubre";
      case "Noviembre":
        return "galeria/noviembre";
      case "Diciembre":
        return "galeria/diciembre";
    }
    return "galeria/octubre";
  };

  const renderizarCategoria = (categoria: string) => {
    const fotos_octubre = [v4, v5, v6];
    const fotos_nov = [v7, v8, v9];
    const fotos_dec = [v1, v2, v3];

    switch (categoria) {
      case "Octubre":
        return (
          <ul className="criollos-container">
            <CustomCarousel>
              {fotos_octubre.map((image, index) => {
                return <img className="img-slider" key={index} src={image} />;
              })}
            </CustomCarousel>
          </ul>
        );
      case "Noviembre":
        return (
          <ul className="criollos-container">
            <CustomCarousel>
              {fotos_nov.map((image, index) => {
                return <img className="img-slider" key={index} src={image} />;
              })}
            </CustomCarousel>
          </ul>
        );
      case "Diciembre":
        return (
          <ul className="criollos-container">
            <CustomCarousel>
              {fotos_dec.map((image, index) => {
                return <img className="img-slider" key={index} src={image} />;
              })}
            </CustomCarousel>
          </ul>
        );
      default:
        return <div>Hola</div>;
    }
  };

  return (
    <section className="menu">
      <article className="logo-fusa">
        <a href="/">
          <img src={homeLogo} alt="Logo fusa" />
        </a>
      </article>
      <article className="barra-opciones">
        <ul>
          {galeria_meses.map((categoria) => (
            <li key={categoria}>
              <button
                className={`btn-menu ${
                  currentCategory === categoria ? "activo" : ""
                }`}
                onClick={() => ActivateButton(categoria)}
              >
                <Link to={`/${NavigateToMenu(categoria)}`}>
                  {categoria.toUpperCase()}
                </Link>
                <div className="overlay"></div>
              </button>
            </li>
          ))}
        </ul>
      </article>
      <article className="cartas">
        {renderizarCategoria(currentCategory)}
      </article>

      <button className="btn-menu realizar-pedido-btn">
        <Link to="" target="_blank">
          CONTÁCTANOS
        </Link>
        <div className="realizar-pedido-overlay"></div>
      </button>
    </section>
  );
};
