//CRUD - metodos
//create - POST
//read - GET
//update - PUT/PATCH
//delete - DELETE

// FORMA LARGA DE REALIZAR PROMESAS
/*const listaClientes = () => {
  const promise = new Promise(function(resolve, reject) {
    
    const http = new XMLHttpRequest();
    //abre http (metodo,url)
    http.open("GET", "http://localhost:3000/perfil")

    //envia la info
    http.send();

    //una vez que carga ejecuta una funcion
    //esta funcion recorre los registros de "perfil" y trae nombre y email
    http.onload = () => {
      const response = JSON.parse(http.response); //pasamos a lenguaje que el navegador lea
      if(http.status >= 400) {//si es mayor hay un error en la peticion del servidor
        reject(response)
      } else{
        resolve(response)
      }
    }
  })

  return promise
}*/

//FORMA CORTA DE REALIZAR PROMESAS (FETCH API)
const listaClientes = () => fetch("http://localhost:3000/perfil").then (respuesta => respuesta.json())//da formato json
//primero realizaconeccion a url, entonces se recibe y se tranforma en formato json, 

  


//recibe valores para pasar al archivo db
//hay que definir un metodo en fetch para que no reciba get que es el de defecto
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",//metodo que reemplaza al get
    headers: { //encabezado para que el servidor sepa que archivo recibe
      "content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()})//info que queremos enviar al cuerpo de la peticion, http trabaja con texto (json)
  }) 
}

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })
}

const detalleCLiente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => 
  respuesta.json()
  )}

  const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({nombre, email})
    }).then(respuesta => respuesta)
    .catch(error => console.log(error))
  }

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCLiente,
  actualizarCliente
}