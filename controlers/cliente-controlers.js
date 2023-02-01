import { clientServices } from "../service/cliente-service.js";


const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr")
    const contenido = `
            <td class="td" data-td>
                ${nombre}
            </td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                    id = "${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;
    linea.innerHTML = contenido;

    const btnEliminar = document.querySelector("button");

    btnEliminar.addEventListener("click", () => {
      const id = btnEliminar.id;
      clientServices.eliminarCliente(id).then(respuesta => {
      }).catch(error => alert("algio malio sal"))
    })

    return linea;
}

//recorre el dom y obtiene el elemento con el atributo data
const table = document.querySelector("[data-table]")

// llama a la funcion que optiene como respuesta datos en formato json
clientServices.listaClientes().then((data) => {
    data.forEach(({nombre, email, id}) => {
      //llama al metodo pasando como parametros los registros de perfil
      const nuevalinea =  crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevalinea);
    });
  }).catch((error) => alert("hubo un problema"));

