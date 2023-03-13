// Import librerias react
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// Import nuestros componentes
import { fetchUsuarios } from "../api";
import ListaVecinos from "../components/ListaVecinos";
import Logout from "../components/log/Logout";
import VolverAInicio from "../components/util/VolverAInicio";
// Import css/imagenes
import "../css/index.css";
import styles from "../css/admin.module.css";
import Header from "../components/Header";

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);

  // Usamos la api para obtener los usuarios al cargar el componente
  useEffect(() => {
    fetchUsuarios().then((response) => setUsers(response));
  }, [users]);

  return (
    <div className={styles.admin}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.title}>Administración</h1>
        <div className={styles.botonUsuario}>
          <button
            onClick={() => {
              navigate("/admin/add");
            }}
          >
            Añadir usuario
          </button>
        </div>
        <div className={styles.usuarios}>
          <ListaVecinos users={users} mode={"admin"}></ListaVecinos>
        </div>
        <Outlet />
        <div className={styles.button_container}>
          <div className={styles.botones}>
            <VolverAInicio />
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}
