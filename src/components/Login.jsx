import React, { Fragment, useState } from "react";

function Login() {
  const [datos, setDatos] = useState({ Nombre: "", Apellidos: "" });
  const handleImputchange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.Nombre + " " + datos.Apellidos);
  };

  return (
    <Fragment>
      <section class="">
            <h1>Gestion de paquetes - Login</h1>
               
                  <div class="container">
                    <div class="abs-center">
                      <form className="border p-3 form" onSubmit={enviarDatos}>
                        
                          <div>
                          <a href="registro.jsx" class="registro">
                            Registrarse
                          </a></div>
                          <br />
                        <div className="form-outline mb-4">
                          <label htmlFor="">Usuario</label>
                          <input
                            className="form-control "
                            type="text"
                            name="Nombre"
                            placeholder="Ingrese su usuario"
                            onChange={handleImputchange}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label htmlFor="">Contraseña</label>
                          <input
                            className="form-control"
                            type="password"
                            name="Apellidos"
                            placeholder="Ingrese su contraseña"
                            onChange={handleImputchange}
                          />
                        </div>

                        
                          <button
                            class="btn btn-primary btn-block mb-4"
                            type="submit"
                          >
                            Enviar
                          </button>
                       
                      </form>
                    </div>
                  </div>
                
             
      </section>
    </Fragment>
  );
}

export default Login;
