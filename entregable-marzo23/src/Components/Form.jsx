import React from 'react'

import { useState } from "react";
import Message from "./Menssage";

const Form = () => {
  const [user, setUser] = useState({
    comida: "",
    pelicula: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (
      user.comida.length >= 3 &&
      !user.pelicula.includes(" ") &&
       user.pelicula.length >=6 
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
      <h2 style={{ color: "green" }}>✨ Bienvenido ✨</h2>

      {show ? (
        <Message comida={user.comida} pelicula={user.pelicula} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Comida</label>
          
          <input
            type="text"
            //   value={comida}
            onChange={(event) =>
              setUser({ ...user, comida: event.target.value })
            }
          />
          <label>Pelicula</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, pelicula: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;