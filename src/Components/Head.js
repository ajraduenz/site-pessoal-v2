import React from "react";
import NextHead from "next/head";

const Head = (props) => {
  return (
    <NextHead>
      <title>
        {props.titulo
          ? `${props.titulo} - Aj Raduenz Soluções Web`
          : "Aj Raduenz - Soluções Web"}
      </title>
      <meta
        name="description"
        content={
          props.descricao ||
          "Soluções Web - Criação de Sites, Ferramentas, React, Wordpress, UX-UI Design, Progressive Web APP. Pague em até 12x Sem Juros. Clique e confira!"
        }
      />
    </NextHead>
  );
};

export default Head;
