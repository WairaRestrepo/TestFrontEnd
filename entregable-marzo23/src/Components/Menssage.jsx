import React from "react";

const Message = ({ comida, pelicula }) => {
  return (
    <>
      <h4>Gracias por ingresar la informacion de tu comida:  , {comida}!</h4>
      <h4>gracias por ingresar la informacion de tu pelicula:   {pelicula}</h4>

    </>
  );
};

export default Message;