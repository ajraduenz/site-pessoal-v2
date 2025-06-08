import React from "react";
import Button from "../../../src/Components/Button";
import "./AnalisesEPlanilhas.css";
import desempenho from "../../../src/img/desempenho.jpg";
import desempenhoM from "../../../src/img/Mobile/desempenho.jpg";
import vbaLogo from "../../../src/img/vba-logo.png";
import Head from "../../../src/Components/Head";
const ProgramacaoEmVBA = () => {
  const titulo = "PROGRAMAÇÃO EM VBA";
  return (
    <main>
      <Head
        titulo="Programação em VBA"
        descricao="Soluções de integração AJAX para planilhas, capturar dados, WebScrap, Automatizar Rotinas. Clique e entre em contato!"
      />
      <section className="introducao">
        <img
          src={
            typeof document !== "undefined" &&
            !document.body.classList.contains("mobile")
              ? desempenho.src
              : desempenhoM.src
          }
        ></img>
        <h1>{titulo}</h1>
        <div className="separator"></div>
      </section>
      <section className="modalidade">
        <div className="container">
          <div className="campo">
            <h2>PLANILHAS EXCEL - VBA</h2>
            <div className="campo-imagem">
              <img src={vbaLogo.src} alt="VBA Logo"></img>
            </div>
            <p>
              Automatizar rotinas burocráticas no Excel pode se tornar um ótimo
              investimento, é possível economizar dezenas e até centenas de
              horas mensais dependendo de cada projeto. O que pode ser feito:
            </p>
            <p>— Automação de planilhas;</p>
            <p>
              — Criar novos recursos e funções dentro do Excel, Word e
              similares;
            </p>
            <p>— Integrar sistemas web com a sua planilha Excel;</p>
            <p>— Customização gerais de cores, gráficos, valores, etc;</p>
            <p>
              Simplificar e agilizar processos que, de outra forma, podem ser
              demorados ou trabalhosos de serem realizados. A infinidade de
              automações em VBA para Excel é muito grande, entre em contato e
              faça um orçamento sem compromisso para analisarmos a viabiliade do
              seu projeto.
            </p>
            <Button
              referencia="botao-analise"
              content="Contato"
              modal
              projeto={titulo}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramacaoEmVBA;
