import React from "react";
import "./Footer.css";
import reactLogo from "../img/react-logo.png";
import Image from "next/image";
const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <footer>
      <div className="logo-rodape">AJ Raduenz</div>
      <div className="info-rodape">
        &copy; {ano} Todos os direitos reservados.
        {typeof document !== "undefined" &&
          document.body.classList.contains("mobile") && <br />}{" "}
        Site desenvolvido em React
        <Image
          alt="React"
          className="react-logo"
          src={reactLogo}
          width={32}
          height={32}
        />
      </div>
    </footer>
  );
};

export default Footer;
