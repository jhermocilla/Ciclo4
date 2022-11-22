import React, { Fragment, useState } from "react";

function Actualizar() {
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
            <h1>Gestion de paquetes - Actualización de ordenes (Recogida)</h1>
               
                  <div class="container">
                    <div class="abs-center">
                      <form className="border p-3 form" rule="form" onSubmit={enviarDatos}>
                        <div className="form-group row">
                          <label class="col-form-label col-sm-2" htmlFor="">Fecha</label>
                          <div class="col-sm-4">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder="01/01/2021"
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>

                          <label class="col-form-label col-sm-2" htmlFor="">Hora</label>
                          <div class="col-sm-4">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder="00:00"
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div> 
                        </div><br />
                        <div className="form-group row">
                          <label class="col-form-label col-sm-2" htmlFor="">Estado</label>
                          <div class="col-sm-5">
                          <select className="form-control" name="lista" id="color">
                          <option value="r">Guardado</option>
                          <option value="a">Cancelado</option>
                          <option value="v">Cumplido</option>
                          </select>
                          </div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col" htmlFor="">Largo</label>
                          <div class="col-sm-2">
                          <input
                            class="form-control "
                            type="text"
                            name="largo"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>

                          <label class="col-form-label col-sm-2" htmlFor="">Ancho</label>
                          <div class="col-sm-2">
                          <input
                            class="form-control "
                            type="text"
                            name="ancho"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>

                          <label class="col-form-label col-sm-2" htmlFor="">Alto</label>
                          <div class="col-sm-2">
                          <input
                            class="form-control "
                            type="text"
                            name="alto"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>

                          <label class="col-form-label col-sm-2" htmlFor="">Peso</label>
                          <div class="col-sm-2">
                          <input
                            class="form-control "
                            type="text"
                            name="peso"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">Direccion recogida</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">Ciudad recogida</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">Nomre destinatario</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">C.C/Nit destinatario</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">Direccion entrega</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label class="col-form-label col-sm-4" htmlFor="">Ciudad entrega</label>
                          <div class="col-sm-8">
                          <input
                            class="form-control "
                            type="text"
                            name="Nombre"
                            placeholder=""
                            tabindex="1"
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                       

                        
                          <button
                            class="btn btn-primary btn-block mb-4"
                            type="submit"
                          >
                            Actualizar orden
                          </button>
                       
                      </form>
                    </div>
                  </div>
                
             
      </section>
    </Fragment>
  );
}

export default Actualizar;
