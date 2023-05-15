import { server } from "../server_communicator.js";
import { validarForm } from "./validations.js";

const formulario = document.querySelector("#login_form")
const inputs  =  formulario.querySelectorAll("[data-input]")
const usuario = inputs[0]
const contrasenia = inputs[1]
// if(window.localStorage.getItem("acceso") == "true"){
//     window.location.href = "Productos.html"
// }
validarForm();

formulario.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const validity =  await buscarPerfil(usuario.value,contrasenia.value);
    if(validity){
        window.localStorage.setItem("acceso", "true")
        window.location.href = "Productos.html"
    }else{
        mostrarErrorPerfil(inputs);
    }
})

const buscarPerfil = async (email, contrasenia) =>{
    let inputEmail =  email.toLowerCase()
    const listaPerfiles = await server.perfiles();
    let encontrado = false
    listaPerfiles.forEach(perfil => {
        if (inputEmail === perfil.user && contrasenia === perfil.password){
            encontrado = true
        }
    })
    return encontrado
}

const mostrarErrorPerfil = () =>{
    inputs.forEach(input =>(input.parentElement).parentElement.querySelector(".message-error").innerHTML = "Perfil no encontrado" )
    
}