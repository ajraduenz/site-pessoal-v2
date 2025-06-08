"use client";
import React from "react";
import NavLink from "./NavLink";
import "./Header.css";
import getScrollPosition from "./Functions/getScrollPosition";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    if (mobile) {
      setMobileMenu(false);
    } else {
      if (document?.querySelector(".filha.active")) {
        document?.querySelector(".categoria-pai")?.classList.add("active");
      } else {
        document?.querySelector(".categoria-pai")?.classList.remove("active");
      }
    }
  }, [mobile, pathname]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    window.onscroll = () => getScrollPosition();
    getScrollPosition();
  }, []);

  // Detecta redimensionamento da tela
  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = !document?.body.classList.contains("desktop");
      setMobile(isMobile);
    };

    // Executa na primeira montagem
    handleResize();

    // Adiciona o listener
    window.addEventListener("resize", handleResize);

    // Remove o listener na desmontagem
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="background-header"></div>

      <header>
        <NavLink to="/" className="logo">
          Aj Raduenz
        </NavLink>

        {mobile ? (
          <div
            className={`icon-hamburguer ${mobileMenu ? "open" : ""}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className="icon"></div>
            <div className="outer-menu-hamburguer">
              <div className="mobile-links">
                <ul>
                  <li>
                    <NavLink to="/">Criação de Sites</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ferramentas">Ferramentas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/desempenho">Relatório de desempenho</NavLink>
                  </li>
                  <li>
                    <NavLink to="/vba">Programação em VBA</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contato">Contato</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <nav>
            <ul className="menu-topo">
              <li>
                <NavLink to="/">Criação de Sites</NavLink>
              </li>
              <li>
                <NavLink to="/ferramentas">Ferramentas</NavLink>
              </li>
              <li className="categoria-pai">
                <div>DESEMPENHO E PLANILHAS</div>
                <ul>
                  <li>
                    <NavLink to="/desempenho" className="filha">
                      Teste de desempenho
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/vba" className="filha">
                      Programação em VBA
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contato">Contato</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
