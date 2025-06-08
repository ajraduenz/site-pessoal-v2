"use client";
import React from "react";
import "./Button.css";
import Modal from "./Modal";

type ButtonProps = {
  referencia: string;
  content: React.ReactNode;
  modal?: boolean;
  projeto?: string;
};

export default function Button({
  referencia,
  content,
  modal: hasModal,
  projeto,
}: ButtonProps) {
  const [modal, setModal] = React.useState(false);
  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  if (hasModal) {
    return (
      <>
        <button onClick={() => setModal(!modal)} className={referencia}>
          {content}
        </button>
        {modal ? <Modal setModal={setModal} projeto={projeto} /> : false}
      </>
    );
  } else {
    return (
      <button
        className={referencia}
        type="submit"
        onClick={() => handleFormSubmit}
      >
        {content}
      </button>
    );
  }
}
// rafce
// rfc
