// Import librerias react
import React, { useState, useRef } from "react";
// Import nuestros componentes
import { sendMensaje } from "../api";
import Header from "../components/Header";
import VolverAInicio from "../components/util/VolverAInicio";
// Import css
import styles from "../css/cartero.module.css";

export default function Cartero() {
  const ref = useRef("");
  const [estiloMensaje, setEstiloMensaje] = useState();

  // Hooks y funciones de un formulario react
  const [formData, setFormData] = useState({
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  };

  const enviarMensaje = (e) => {
    e.preventDefault();
    const respuesta = sendMensaje(formData);
    respuesta.then((result) => {
      if (!result.result) {
        setEstiloMensaje("error");
        ref.current.innerText = "No se encuentra el buzón";
      } else {
        setFormData({
          ...formData,
          [e.target.id]: "",
        });
        setEstiloMensaje("success");
        ref.current.innerText = "Se envio el mensaje correctamente";
      }
    });
  };

  return (
    <div className={styles.cartero}>
      <Header />
      <h1>Carta</h1>
      <div className={styles.carta}>
        <form onSubmit={enviarMensaje}>
          <p>
            <label htmlFor="email">Destinatario: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInput}
              required
            />
          </p>
          <p>
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              name="asunto"
              id="asunto"
              value={formData.asunto}
              onChange={handleInput}
              required
            />
          </p>
          <hr />
          <textarea
            name="mensaje"
            id="mensaje"
            spellCheck="false"
            placeholder="Escriba su mensaje..."
            value={formData.mensaje}
            onChange={handleInput}
            required
          ></textarea>
          <span className={estiloMensaje} ref={ref}></span>
          <br />
          <button type="submit">Enviar carta</button>
        </form>
      </div>
      <VolverAInicio />
    </div>
  );
}
