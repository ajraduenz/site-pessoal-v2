import "./Ferramentas.css";
import React from "react";
import ferramentas from "../../../src/img/ferramentas.jpg";
import ferramentasM from "../../../src/img/Mobile/ferramentas.jpg";
import carrossel from "../../../src/img/slides.png";
import popUp from "../../../src/img/pop-up.png";
import Button from "../../../src/Components/Button";
import Head from "../../../src/Components/Head";

const Ferramentas = () => {
  return (
    <main className="page-ferramentas">
      <Head
        titulo="Ferramentas Web"
        descricao="Soluções Web - Ferramentas Web, formulários, pop-ups e animações pensadas com UI-UX Design para atender a sua necessidade. Clique e confira!"
      />
      <section className="introducao">
        <img
          src={
            typeof document !== "undefined" &&
            !document.body.classList.contains("mobile")
              ? ferramentas.src
              : ferramentasM.src
          }
        ></img>
        <h1>FERRAMENTAS</h1>
        <div className="separator"></div>
      </section>
      <section className="conteudo">
        <div className="container">
          <div className="ferramentas-intro">
            <ul className="ferramentas">
              <li className="ferramenta">
                <div className="container-img">
                  <img src={carrossel.src} alt="Carrossel" />
                </div>
                <div className="conteudo">
                  <h2>Carrossel</h2>
                  <p> — Leve com suporte a texto;</p>
                  <p> — Feito em javascript html e css puro;</p>
                  <p>
                    {" "}
                    — Sem a adição de qualquer plugin que pode deixar seu site
                    pesado.{" "}
                  </p>
                  <p>
                    O código genérico está disponível gratuitamente em meu
                    GitHub, porém caso queira alguma customização ou suporte
                    faça um orçamento clicando no link abaixo:
                  </p>
                  <Button
                    referencia="botao-ferramentas"
                    content="Contato"
                    modal
                    projeto="Carrossel"
                  />
                </div>
              </li>
              <li className="ferramenta">
                <div className="container-img">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 470 470"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    enableBackground="new 0 0 470 470"
                  >
                    <g>
                      <path d="m329.955,63.08h-15.007c-4.142,0-7.5,3.358-7.5,7.5 0,4.142 3.358,7.5 7.5,7.5h15.007c8.591,0 15.58,6.989 15.58,15.579v345.762c0,8.59-6.989,15.579-15.58,15.579h-264.91c-8.591,0-15.58-6.989-15.58-15.579v-345.762c0-8.59 6.989-15.579 15.58-15.579h15.007c4.142,0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-15.007c-16.862,0-30.58,13.718-30.58,30.579v345.762c0,16.861 13.718,30.579 30.58,30.579h264.91c16.862,0 30.58-13.718 30.58-30.579v-345.762c0-16.862-13.718-30.579-30.58-30.579z" />
                      <path d="m435.535,395.625c0-0.001 0-249.705 0-249.705 0-0.345-0.031-0.682-0.077-1.015-0.01-0.074-0.021-0.147-0.034-0.221-0.059-0.352-0.135-0.698-0.241-1.032l-17.486-56.307c-0.974-3.138-3.877-5.276-7.163-5.276s-6.188,2.138-7.163,5.276l-17.487,56.31c-0.105,0.333-0.181,0.678-0.24,1.029-0.012,0.074-0.024,0.147-0.034,0.221-0.045,0.333-0.076,0.669-0.076,1.014v273.455c0,11.373 9.252,20.625 20.625,20.625h8.75c11.373,0 20.625-9.252 20.625-20.625 0.001,0.001 0.001-23.748 0.001-23.749zm-25-280.767l7.317,23.563h-14.635l7.318-23.563zm-10,38.562h20v234.705h-20v-234.705zm20,265.955c0,3.102-2.523,5.625-5.625,5.625h-8.75c-3.102,0-5.625-2.523-5.625-5.625v-16.25h20v16.25z" />
                      <path d="m274.947,346.913h-154.894c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h154.895c4.142,0 7.5-3.358 7.5-7.5s-3.359-7.5-7.501-7.5z" />
                      <path d="m197.5,376.913h-77.447c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h77.447c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" />
                      <path d="m64.465,100.579v331.921c0,4.142 3.358,7.5 7.5,7.5h251.069c4.142,0 7.5-3.358 7.5-7.5v-331.921c0-4.142-3.358-7.5-7.5-7.5h-30.587v-22.5c0-16.862-13.718-30.58-30.579-30.58h-17.459c-3.606-22.64-23.269-39.999-46.909-39.999s-43.303,17.359-46.909,40h-17.459c-16.861,0-30.579,13.718-30.579,30.58v22.5h-30.588c-4.142-0.001-7.5,3.357-7.5,7.499zm53.088-29.999c0-8.591 6.989-15.58 15.579-15.58h24.367c4.142,0 7.5-3.358 7.5-7.5 0.001-17.92 14.58-32.5 32.501-32.5s32.5,14.58 32.501,32.5c0,4.142 3.358,7.5 7.5,7.5h24.367c8.59,0 15.579,6.989 15.579,15.58v52.5h-159.894v-52.5zm-38.088,37.499h23.087v22.5c0,4.142 3.358,7.5 7.5,7.5h174.895c4.142,0 7.5-3.358 7.5-7.5v-22.5h23.087v316.921h-236.069v-316.921z" />
                      <path d="m197.5,35c-4.142,0-7.5,3.358-7.5,7.5v10c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z" />
                      <path d="m274.947,171.167h-10c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h2.5v90.746h-2.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h10c4.142,0 7.5-3.358 7.5-7.5v-105.746c0-4.142-3.358-7.5-7.5-7.5z" />
                      <path d="m120.053,331.913h114.895c4.142,0 7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v2.5h-99.895v-2.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v10c1.42109e-14,4.142 3.358,7.5 7.5,7.5z" />
                      <path d="m120.053,291.913h114.895c4.142,0 7.5-3.358 7.5-7.5v-105.746c0-4.142-3.358-7.5-7.5-7.5h-114.895c-4.142,0-7.5,3.358-7.5,7.5v20c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-12.5h99.895v90.746h-99.895v-48.246c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v55.746c1.42109e-14,4.142 3.358,7.5 7.5,7.5z" />
                    </g>
                  </svg>
                </div>
                <div className="conteudo">
                  <h2>Formulários</h2>
                  <p>
                    Formulários diversos que podem se comunicar com banco de
                    dados, ou receber direto no seu e-mail, ou em uma planilha
                    Google Sheets, por exemplo. Entre em contato para saber mais
                  </p>
                  <Button
                    referencia="botao-ferramentas"
                    content="Contato"
                    modal
                    projeto="Formulários"
                  />
                </div>
              </li>
              <li className="ferramenta">
                <div className="container-img">
                  <img src={popUp.src} alt="Pop-Up" />
                </div>
                <div className="conteudo">
                  <h2>Pop-ups com cookies</h2>
                  <p>
                    Pop-ups, mensagens de avisos, cadastro de e-mail, ou
                    qualquer outro acessório que necessite Cookie.
                  </p>
                  <Button
                    referencia="botao-ferramentas"
                    content="Contato"
                    modal
                    projeto="Pop-ups com cookies"
                  />
                </div>
              </li>
              <li className="ferramenta">
                <div className="container-img">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                  >
                    <path
                      id="movement--in--overlapping--networks_1_"
                      d="M21,5.64v0.72c3.11,0,5.64,3.24,5.64,7.223c0,1.929-0.831,3.569-1.468,4.548
	l-0.483-2.136l-0.703,0.159l0.742,3.277l3.269-0.743l-0.16-0.701l-2.009,0.457c0.68-1.067,1.534-2.81,1.534-4.861
	c0-2.69-1.079-5.067-2.721-6.505c3.515,1.44,6,4.894,6,8.922c0,5.315-4.324,9.64-9.64,9.64c-1.543,0-2.997-0.373-4.292-1.021
	c2.875-1.911,4.652-5.146,4.652-8.619c0-5.712-4.648-10.36-10.36-10.36S0.64,10.288,0.64,16c0,5.713,4.647,10.36,10.36,10.36v-0.72
	c-3.11,0-5.64-3.24-5.64-7.223c0-1.93,0.832-3.569,1.469-4.548l0.483,2.136l0.702-0.159l-0.742-3.278l-3.268,0.743l0.159,0.702
	l2.009-0.456c-0.68,1.066-1.532,2.809-1.532,4.86c0,2.689,1.078,5.066,2.72,6.504c-3.515-1.44-6-4.893-6-8.921
	c0-5.315,4.325-9.64,9.64-9.64c1.543,0,2.997,0.373,4.292,1.021C12.416,9.291,10.64,12.526,10.64,16
	c0,5.713,4.647,10.36,10.36,10.36S31.36,21.713,31.36,16C31.36,10.288,26.713,5.64,21,5.64z M11.36,16
	c0-3.357,1.776-6.483,4.637-8.228C18.775,9.466,20.64,12.515,20.64,16c0,3.357-1.776,6.482-4.637,8.228
	C13.225,22.534,11.36,19.485,11.36,16z"
                    />
                    <rect
                      id="_Transparent_Rectangle"
                      style={{ fill: "none" }}
                      width="32"
                      height="32"
                    />
                  </svg>
                </div>
                <div className="conteudo">
                  <h2>Elementos Animados</h2>
                  <p>
                    Elementos que interajam com o usuário, com o mouse ou com o
                    touch do mobile, animações diversas, zoom. Entre e contato e
                    saiba mais.
                  </p>
                  <Button
                    referencia="botao-ferramentas"
                    content="Contato"
                    modal
                    projeto="Elementos Animados"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ferramentas;
