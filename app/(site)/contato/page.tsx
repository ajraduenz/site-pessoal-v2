"use client";
import React from "react";
import "./Contato.css";
import Button from "../../../src/Components/Button";
import ModalEnvio from "../../../src/Components/ModalEnvio";
import contato from "../../../src/img/contato.jpg";
import contatoM from "../../../src/img/Mobile/contato.jpg";
import Head from "../../../src/Components/Head";

const Contato = () => {
  const [modalEnvio, setModalEnvio] = React.useState(false);
  const [values, setValues] = React.useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    interesse: "",
    pagina: "Contato no site",
  });
  function onChange({
    target,
  }: {
    target: EventTarget & (HTMLInputElement | HTMLTextAreaElement);
  }) {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
  }

  const [imgSrc, setImgSrc] = React.useState(contato.src);

  React.useEffect(() => {
    if (document.body.classList.contains("mobile")) {
      setImgSrc(contatoM.src);
    } else {
      setImgSrc(contato.src);
    }
  }, []);

  return (
    <main>
      <Head
        titulo="Contato"
        descricao="Desenvolvimento Web e Criação de Sites em Pomerode e região do vale do Itajaí. Entre em contato. Pagamento em até 12x Sem Juros. Clique e confira!"
      />
      <section className="introducao">
        <img src={imgSrc} alt="Cartas de contato" rel="preload" />
        <h1>CONTATO</h1>
        <div className="separator"></div>
      </section>
      <section className="introducao">
        <div className="container">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setModalEnvio(!modalEnvio);
            }}
            className="contato"
          >
            <div className="info-contato">
              Preencha o formulário abaixo e assim que possível entrarei em
              contato:
            </div>
            <div className="campo-input">
              <input
                type="text"
                id="nome"
                name="Nome"
                placeholder="Nome"
                required
                className="campo-contato"
                value={values.nome}
                onChange={onChange}
              />
            </div>
            <div className="campo-input">
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="campo-contato"
                value={values.email}
                onChange={onChange}
              />
            </div>
            <div className="campo-input">
              <input
                type="text"
                id="telefone"
                placeholder="Telefone"
                required
                className="campo-contato"
                value={values.telefone}
                onChange={onChange}
              />
            </div>
            <div className="campo-input">
              <input
                type="text"
                id="interesse"
                placeholder="Interesse"
                required
                className="campo-contato"
                value={values.interesse}
                onChange={onChange}
              />
            </div>
            <div className="campo-input container-mensagem">
              <textarea
                id="mensagem"
                value={values.mensagem}
                placeholder="Mensagem"
                required
                onChange={(e) => onChange(e)}
                cols={25}
                name="mensagem"
                rows={6}
              />
            </div>
            <Button referencia="botao-contato" content="Enviar" />
            {modalEnvio && (
              <ModalEnvio values={values} setModalEnvio={setModalEnvio} />
            )}
          </form>
        </div>
      </section>
    </main>
  );
};
export default Contato;
