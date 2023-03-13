// Import librerias react
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Import nuestros componentes
import ListaVecinos from "../components/ListaVecinos";
import { fetchUsuarios } from "../api";
import { UserContext } from "../context/UserContext";
// Import css/imagenes
import image_buzon from "../css/img/buzon_vecinal.png";
import "../css/index.css";
import Header from "../components/Header";

export default function Inicio() {
  const { user } = useContext(UserContext);
  const role = () => {
    const parts = user.split(".");
    const decodedPayload = atob(parts[1]);
    const payloadObj = JSON.parse(decodedPayload);

    return payloadObj.role;
  };
  const [usuarios, setUsuarios] = useState(null);

  // Usamos la api para obtener los usuarios al cargar el componente
  useEffect(() => {
    fetchUsuarios().then((response) => setUsuarios(response));
  }, []);

  return (
    <div className="app">
      <Header
        title="Buzón Vecinal"
        text="Una nueva forma de recibir tu correo, más rápido, más fácil, más
            cómodo y sin papel."
        image={image_buzon}
      />

      <div className="usuarios">
        <ListaVecinos users={usuarios} />
      </div>

      <div className="mensaje">
        {user ? (
          <button className="button-mensaje">
            <Link
              to={role() === "admin" ? "/admin" : "/buzon"}
              className="button"
            >
              {role() === "admin" ? "Administrar" : "Volver a buzon"}
            </Link>
          </button>
        ) : (
          <></>
        )}
        <button className="button-mensaje">
          <Link to="/cartero" className="button">
            Escribir carta
          </Link>
        </button>
      </div>

      <div className="footer">
        <Link to="/login-admin" className="button">
          Admin
        </Link>
      </div>
    </div>
  );
}
