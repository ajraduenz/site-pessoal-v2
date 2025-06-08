import React from "react";
import criarSite from "../../../src/img/criar-site.jpg";
import criarSiteM from "../../../src/img/Mobile/criar-site.jpg";

const NotFound = () => {
  return (
    <main>
      <section className="introducao">
        <img
          src={
            typeof document !== "undefined" &&
            document.body.classList.contains("mobile")
              ? criarSite.src
              : criarSiteM.src
          }
          alt="Flores amarelas"
          rel="preload"
        ></img>
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
      </section>
    </main>
  );
};

export default NotFound;
