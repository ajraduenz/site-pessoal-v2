import React from "react";
import "./Modal.css";
import Button from "./Button";
import ModalEnvio from "./ModalEnvio";

type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  projeto?: string;
};

const Modal: React.FC<ModalProps> = ({ setModal, projeto }) => {
  const [modalEnvio, setModalEnvio] = React.useState(false);

  type FormValues = {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
    interesse: string;
    pagina?: string;
    projeto?: string;
  };

  const [values, setValues] = React.useState<FormValues>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    interesse: "",
    pagina: projeto,
  });
  function onChange({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setModalEnvio(!modalEnvio);
  }
  return (
    <div
      className="modal-outer"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setModal(false);
        }
      }}
    >
      <div className="modal-in">
        <legend>{projeto}</legend>
        <h2>Contato</h2>
        <div onClick={() => setModal(false)} className="close-modal">
          &#10005;
        </div>

        <form onSubmit={handleSubmit} className="modal-contact">
          <label>
            <input
              type="text"
              placeholder="Nome"
              id="nome"
              name="Nome"
              required
              value={values.nome}
              onChange={onChange}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              name="E-mail"
              required
              value={values.email}
              onChange={onChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="Telefone"
              id="telefone"
              placeholder="Telefone "
              required
              value={values.telefone}
              onChange={onChange}
            />
          </label>
          <label className="mensagem">
            <textarea
              name="Mensagem"
              id="mensagem"
              placeholder="Mensagem "
              required
              value={values.mensagem}
              onChange={onChange}
            ></textarea>
          </label>
          <Button referencia="botao-enviar" content="Enviar Mensagem" />
          {modalEnvio && (
            <ModalEnvio values={values} setModalEnvio={setModalEnvio} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
