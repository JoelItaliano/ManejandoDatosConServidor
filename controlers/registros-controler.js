import { clientServices } from "../service/cliente-service.js";
const formulario = document.querySelector("[data-form]");

//FUNCION PARA CAPTAR EL VALOR DEL NOMBRE Y EMAIL
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.crearCliente(nombre, email).then(() => {
       window.location.href = "/screens/registro_completado.html"
    }).catch(err => console.log(err));
})