import React from "react";
import "./CriarSite.css";
import criarSite from "../../src/img/criar-site.jpg";
import criarSiteM from "../../src/img/Mobile/criar-site.jpg";
import Preco from "../../src/Components/Preco";
import Button from "../../src/Components/Button";
import Href from "../../src/Components/Href";
import Head from "../../src/Components/Head";

const CriarSite = () => {
  return (
    <main>
      <Head descricao="Soluções Web - Criação de Sites, Ferramentas, React, Wordpress, UX-UI Design, Progressive Web APP. Pague em até 12x Sem Juros. Clique e confira!" />
      <section className="introducao">
        <img
          src={
            typeof document !== "undefined" &&
            document.body.classList.contains("mobile")
              ? criarSiteM.src
              : criarSite.src
          }
          alt="Flores amarelas"
        />
        <h1>CRIAÇÃO DE SITES</h1>
        <div className="separator"></div>
      </section>
      <section className="orcamentos">
        <div className="secao-orcamentos container">
          <div className="orcamento opcao-1">
            <div>
              <h2>Instalar e Configurar em Wordpress</h2>
              <p>
                Site Wordpress totalmente configurado e adaptado para atender a
                sua necessidade.
              </p>
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
                preco="880,00"
                precoAntigo="R$ 1.260,00"
                condicoesParcela="12"
                valorParcela="88,00"
              />
              <Href para="/site-em-wordpress" />
              <Button
                referencia="botao-site"
                content="Contato"
                modal
                projeto="Site Completo Wordpress"
              />
            </div>
          </div>
          <div className="orcamento opcao-2">
            <div className="destaque">RECOMENDADO</div>

            <div className="content-destaque">
              <h2>Projeto Exclusivo</h2>
              <p>
                Um sistema feito exclusivamente para atender sua necessidade. Me
                conte mais sobre seu projeto.
              </p>
              <p>&nbsp;</p>
              <p>Indicado para:</p>
              <p>
                &mdash; Empresas que querem um site ou sistema totalmente
                exclusivo de acordo com a sua marca ou layout;
              </p>
              <p>
                &mdash; Restaurantes com cardápios exclusivos e que mudam com
                frequência;
              </p>
              <p>&mdash; Pessoa com ideia e quer desenvolver um sistema;</p>
              <p>
                &mdash; Desenvolver um{" "}
                <a
                  style={{ color: "#fff", textDecoration: "underline" }}
                  href="https://rockcontent.com/br/blog/progressive-web-apps/"
                  target="_blank"
                  rel="noreferrer external"
                  title="Entenda o que é Progressive Web APP"
                >
                  Progressive Web APP
                </a>
                ;
              </p>
              <p>
                &mdash; Converter projetos do Adobe XD ou Figma para HTML, CSS e
                Javascript.
              </p>
            </div>
            <div>
              <Preco semPreco />
              <Href para="/projeto-exclusivo" />
              <Button
                referencia="botao-site"
                content="Orçamento"
                modal
                projeto="Site Exclusivo"
              />
            </div>
          </div>
          <div className="orcamento opcao-3">
            <div>
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
            </div>
            <div>
              <Preco semPreco />
              <Href para="/montar-loja-virtual" />
              <Button
                referencia="botao-site"
                content="Orçamento"
                modal
                projeto="E-commerce"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CriarSite;
