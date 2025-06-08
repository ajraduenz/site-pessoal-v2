"use client";
import React from "react";
import "./Button.css";
import Modal from "./Modal";

export default function Button(props) {
  const [modal, setModal] = React.useState(false);
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  if (props.modal) {
    return (
      <>
        <button onClick={() => setModal(!modal)} className={props.referencia}>
          {props.content}
        </button>
        {modal ? <Modal setModal={setModal} projeto={props.projeto} /> : false}
      </>
    );
  } else {
    return (
      <button
        className={props.referencia}
        type="submit"
        onClick={() => handleFormSubmit}
      >
        {props.content}
      </button>
    );
  }
}
// rafce
// rfc
