import { server } from "../server_communicator.js";
import { validarForm } from "./validations.js";

export 
const crearVentana_Emergente = () =>{
    const contenedor = document.createElement("section");
    contenedor.classList.add("addProduct__section","container");
    const titulo = document.createElement("h3");
    titulo.innerHTML ='Agregar Producto';
    titulo.classList.add("addProduct__title");
    contenedor.appendChild(titulo);
    const formulario = document.createElement("form")
    formulario.classList.add("addProduct__form")
    formulario.setAttribute("data-form",null)

    const contenido = `
                        <div class="input_container">
                            <label for="name" class="contact__label label-product-name">Nombre del producto
                                <input type="text" class="contact__input input-product-name" value="AngelOrellana" required data-nombre>
                            </label>
                            <p class="message-error">verifica el contenido</p>
                        </div>
                        <div class="input_container">
                            <label for="price" class="contact__label label-product-price">Precio
                                <input type="number" pattern="[0-9]+(,[0-9]+)?" class="contact__input input-product-price" value= "211" required data-precio>
                            </label>
                            <p class="message-error">verifica el contenido</p>
                        </div>
                        <div class="input_container">
                            <label for="demo" class="contact__label label-product-demo">Demografia
                                <input type="text" class="contact__input input-product-price" value="Hip Hop" required data-demo>
                            </label>
                            <p class="message-error">verifica el contenido</p>
                        </div>
                        <input type="file" name="imagen" id="imagen" class="input-img" required data-img>
                        <button type="submit" class="addProduct__button button">Agregar</button>`
    formulario.innerHTML = contenido ;
    contenedor.appendChild(formulario)
    const cancel__btn= document.createElement('p');
    cancel__btn.classList.add('cancel-addProduct')
    cancel__btn.addEventListener("click", ()=>{
        const main = document.querySelector(".main")
        const disablingCover = document.querySelector(".disabling-cover")
        main.removeChild(contenedor)
        main.removeChild(disablingCover)
        validarForm();
    })
    cancel__btn.innerText = "cancelar"
    contenedor.appendChild(cancel__btn);
    
    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const categoria = document.querySelector("[data-demo]").value;
        const  imagen = document.querySelector("[data-img]").files[0];
        let  precio = document.querySelector("[data-precio]").value;
        precio = "$ "+ precio
        server.agregarProducto(nombre,precio,categoria,imagen)

    })
;     return contenedor
}

export const crearDeshabilitador = ()=>{
    
   const deshabilitador = document.createElement("div");
   deshabilitador.classList.add("disabling-cover");
   return deshabilitador
}

export const ventanaEmergente ={
    crearDeshabilitador,
    crearVentana_Emergente,
}

validarForm();