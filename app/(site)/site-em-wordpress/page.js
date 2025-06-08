import React from "react";
import Button from "../../../src/Components/Button";
import Head from "../../../src/Components/Head";
import Preco from "../../../src/Components/Preco";
import criarSite from "../../../src/img/criar-site.jpg";
import criarSiteM from "../../../src/img/Mobile/criar-site.jpg";
import "./SiteBasico.css";

const SiteBasico = () => {
  const titulo = "Instalar e Configurar Wordpress";
  return (
    <main>
      <Head
        titulo="Site em Wordpress"
        descricao="Criar site Wordpress + formulários e e-mail para o seu negócio, apenas R$880,00 à vista. Pague em até 12x Sem Juros. Clique e confira!"
      />
      <section className="siteBasico introducao">
        <img
          src={
            typeof document !== "undefined" &&
            document.body.classList.contains("mobile")
              ? criarSite.src
              : criarSiteM.src
          }
          alt="Flores amarelas"
        ></img>
        <h1>CRIAÇÃO DE SITES</h1>
        <div className="siteBasico separator"></div>
      </section>
      <section className="siteBasico orcamentos">
        <div className="siteBasico secao-orcamentos container">
          <div className="siteBasico orcamento">
            <div>
              <h2>{titulo}</h2>
              <p>
                Site Wordpress totalmente configurado e adaptado para atender a
                sua necessidade.
              </p>
              <p>São diversos temas grátis disponíveis.</p>
              <p>&nbsp;</p>
              <p>Indicado para:</p>
              <p>
                &mdash; Empresas que querem apresentar informações do seu
                negócio para Web;
              </p>
              <p>
                &mdash; Profissionais liberais, autônomos, consultórios,
                academias, entre outros que buscam ter um site para servir de
                cartão de visita;
              </p>
              <p>
                &mdash; Informar horário de atendimento, localização,
                informações gerais, formulários de contato, etc;
              </p>
            </div>
            <div>
              <Preco
                preco="1.050,00"
                precoAntigo="R$ 1.260,00"
                condicoesParcela="12"
                valorParcela="105,00"
              />
              <Button
                referencia="botao-site"
                content="Contato"
                modal
                projeto={titulo}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="siteBasico separator"></div>
      <section className="siteBasico informacoes container">
        <h2>Benefícios</h2>

        <ul>
          <li>
            &mdash; Site totalmente responsivo, ou seja, otimizado para
            funcionar em qualquer dispositivo;
          </li>
          <li>&mdash; Diversos temas grátis que você pode escolher;</li>
          <li>
            &mdash; Interface de usuário amigável, não será necessário saber
            programar;
          </li>
          <li>
            &mdash; Otimizado para os motores de busca, como Google e Bing (
            <a
              href="https://neilpatel.com/br/o-que-e-seo-o-guia-completo-da-otimizacao-dos-motores-de-busca/"
              target="_blank"
              rel="noreferrer external"
              title="Entenda o que é SEO"
            >
              SEO
            </a>
            );
          </li>
          <li>
            &mdash; Boa performance de acordo com o teste de desempenho{" "}
            <a
              href="https://pt.semrush.com/blog/como-otimizar-seu-site-com-google-lighthouse/"
              target="_blank"
              rel="noreferrer external"
              title="Entenda o que é Lighthouse"
            >
              Google Lighthouse
            </a>
            ;
          </li>
        </ul>
        <div className="siteBasico separator"></div>
        <h2>Como funciona?</h2>
        <p>
          Ao solicitar o serviço, entrarei em contato para definirmos temas,
          cores, mídias e conteúdo que usaremos para a criação do site.
        </p>
        <p>
          Após todos os pontos alinhados, inicia o processo de produção que
          segue normalmente este cronograma:
        </p>
        <p>&mdash; Compra de domínio;</p>
        <p>&mdash; Instalação do Wordpress e banco de dados;</p>
        <p>
          &mdash; Configurações internas do layout e adição de logos, imagens e
          conteúdo conforme alinhado;
        </p>
        <p>&mdash; Instalação de plugins necessários;</p>
        <p>
          &mdash; Definir uma hospedagem que terá um bom custo X benefício de
          acordo com o projeto;
        </p>
        <p>&mdash; Transferência de todo o conteúdo para a hospedagem;</p>
        <p>
          &mdash; Configuação de e-mail profissional e integração com formulário
          de contato;
        </p>
        <p>
          &mdash; Teste finais de desempenho, SEO, boas práticas e
          acessibilidade;
        </p>
        <p>&mdash; Transferência de todos os logins para o usuário;</p>
        <p>O prazo de entrega pode variar de 7 a 15 dias.</p>
      </section>
    </main>
  );
};

export default SiteBasico;
