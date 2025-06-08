import React from "react";
import Button from "../../../src/Components/Button";

import "./Desempenho.css";
import desempenho from "../../../src/img/desempenho.jpg";
import desempenhoM from "../../../src/img/Mobile/desempenho.jpg";
import lighthouse from "../../../src/img/google-lighthouse.jpg";
import Head from "../../../src/Components/Head";

const Desempenho = () => {
  const titulo = "TESTE DE DESEMPENHO";
  return (
    <main>
      <Head
        titulo="Teste de Desempenho"
        descricao="Soluções Web - Seu site está lento? Aumente o desempenho do seu site, solicite um orçamento. Pague em até 12x Sem Juros. Clique e confira!"
      />
      <section className="introducao">
        <h1>DESEMPENHO</h1>

        <img
          src={
            typeof document !== "undefined" &&
            document.body.classList.contains("mobile")
              ? desempenhoM.src
              : desempenho.src
          }
          alt="Cronômetro"
          rel="preload"
        ></img>
        <div className="separator"></div>
      </section>
      <section className="modalidade">
        <div className="container">
          <div className="campo">
            <h2>{titulo}</h2>
            <div className="campo-imagem">
              <img src={lighthouse.src} alt="Teste de desempenho de site"></img>
            </div>
            <p>
              Seu site está lento? Há erros no console? Baixo ranqueamento no
              Google? Solicite um orçamento para aprimorar seu site.
            </p>
            <p>
              Elaboração de um teste de desempenho, identificarei pontos que seu
              site pode melhorar e como melhorar, além de boas práticas no
              momento de adicionar novo conteúdo.
            </p>
            <p>— Análise de desempenho Lighthouse;</p>
            <p>— Evidenciar pontos que estão deixando seu site lento;</p>
            <p>— Pontos que podem melhorar;</p>
            <p>
              — Relatório completo explicando pontos críticos detalhadamente.
            </p>
            <p>
              Após análise, caso haja algum ponto a melhorar, deixarei um
              orçamento para possíveis correções. É necessário o usuário ter
              acesso ao código fonte do site.
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

export default Desempenho;
