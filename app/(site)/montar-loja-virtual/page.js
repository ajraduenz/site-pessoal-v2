import React from "react";
import "./LojaVirtual.css";
import Button from "../../../src/Components/Button";
import criarSite from "../../../src/img/criar-site.jpg";
import criarSiteM from "../../../src/img/Mobile/criar-site.jpg";
import Head from "../../../src/Components/Head";

const LojaVirtual = () => {
  return (
    <main>
      <Head
        titulo="Loja Virtual"
        descricao="Soluções Web - Criação de E-commerce, Tenha uma loja virtual para alavancar suas vendas. Pague em até 12x Sem Juros. Clique e confira!"
      />
      <section className="lojaVirtual introducao">
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
        <div className="lojaVirtual separator"></div>
      </section>
      <section className="lojaVirtual orcamentos">
        <div className="lojaVirtual secao-orcamentos container">
          <div className="lojaVirtual orcamento">
            <h2>Loja Virtual</h2>
            <p>
              Um site Magento totalmente pronto e configurado para receber
              produtos.
            </p>
            <p>&nbsp;</p>
            <p>Indicado para lojas virtuais completas:</p>
            <p>&mdash; Tema de acordo com a sua necessidade;</p>
            <p>&mdash; Sistema de pagamento, como cartão, boletos e PIX;</p>
            <p>&mdash; Sistema de fretes;</p>
            <p>&mdash; Integração com Bling para vendas em marketplaces;</p>
            <p>&mdash; Treinamento para usuários;</p>
            <div>
              <div className="lojaVirtual condicao-pgto">
                <span>Pague em até 12x Sem Juros</span>
              </div>

              <Button
                referencia="botao-site"
                content="Orçamento"
                modal
                projeto="Site Exclusivo"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="lojaVirtual separator"></div>
      <section className="lojaVirtual informacoes container">
        <h2>Benefícios</h2>

        <ul>
          <li>
            &mdash; Site totalmente responsivo, ou seja, otimizado para
            funcionar em qualquer dispositivo;
          </li>
          <li>
            &mdash; Interface de usuário amigável, não será necessário saber
            programar;
          </li>
          <li>
            &mdash; Todos os campos, como telefone, endereços, cardápios,
            poderão ser customizáveis;
          </li>
          <li>
            &mdash; Tutorial para configuração dos campos, atualizações, entre
            outros;
          </li>
          <li>
            &mdash; Configurado com Google Analytics para análise de conteúdo;
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
            &mdash; Otimização de desempenho de acordo com os padrões do{" "}
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
        <div className="lojaVirtual separator"></div>
        <h2>Como Funciona?</h2>
        <p>
          Ao contratar o serviço entrarei em contato para elaborarmos um
          briefing contando um pouco da historia da sua empresa, o que ela faz,
          quais são os seus objetivos com relação ao projeto, que modelos que te
          inspiram;
        </p>
        <p>
          Em seguida definiremos a lógica por trás do seu projeto, o que ele
          deve fazer, numero de pessoas estimadas que o acessarão, segurança e
          hierarquias de uso;
        </p>
        <p>Depois selecionaremos artes, cores e textos que você deseja usar;</p>
        <p>
          Caso você não tenha artes prontas não tem problema, com base no que
          você me passou estaremos procurando imagens com licença de uso para
          usarmos no projeto;
        </p>
        <p>
          Após a análise, e com todos os pontos alinhados, apresentarei um
          portótipo do projeto, de modelos de artes, imagens e ícones que serão
          usados;
        </p>
        <div className="lojaVirtual separator"></div>
        <h2>O que é feito?</h2>
        <p>
          Após todos os pontos alinhados, inicia o processo de produção que
          segue normalmente este cronograma:
        </p>
        <p>&mdash; Compra de domínio;</p>
        <p>
          &mdash; Planejamento e separação de componentes HTML CSS e Javascript
          voltado para SEO, responsividade e performance;
        </p>
        <p>
          &mdash; Montagem de metatags, blocos como menu, corpo, conteúdo,
          mídias, aplicação de CSS e Javascript;
        </p>
        <p>
          &mdash; Criação do(s) banco(s) de dados necessário(s) e implementação
          do painel CMS com cada elemento que será costumizável, assim como
          sistemas de fretes, pagamentos e integrações em caso de e-commerce;
        </p>
        <p>
          &mdash; Configuação de e-mail profissional e integração com formulário
          de contato;
        </p>
        <p>
          &mdash; Definir uma hospedagem que terá um bom custo X benefício de
          acordo com o projeto;
        </p>
        <p>&mdash; Transferência de todo o conteúdo para a hospedagem;</p>
        <p>&mdash; Instalação do painel Google;</p>
        <p>&mdash; Teste de desempenho, SEO, boas práticas e acessibilidade;</p>
        <p>&mdash; Testes e feedback do usuário;</p>
        <p>&mdash; Transferência de todos os logins para o usuário;</p>
        <p>
          &mdash; Elaboração de tutoriais de alteração de conteúdo e de
          pagamentos da hospedagem e domínio;
        </p>
        <p>
          O prazo de entrega pode variar de 30 a 60 dias, dependendo da
          complexidade do projeto pode demorar mais. Mas não se preocupe, você
          será informado na fase inicial a devida previsão caso o seu projeto
          necessite de mais tempo.
        </p>
      </section>
    </main>
  );
};

export default LojaVirtual;
