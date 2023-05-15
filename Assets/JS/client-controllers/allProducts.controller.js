import { server } from "../server_communicator.js";
import { ventanaEmergente } from "./addProduct.controller.js";
import { validarForm } from "./validations.js";

const lista  = document.querySelector(".products__category-list");
const agregarProducto_btn = document.querySelector("[data-add]");
      agregarProducto_btn.addEventListener("click",()=>{
        document.querySelector(".main").appendChild(ventanaEmergente.crearDeshabilitador())
        document.querySelector(".main").appendChild(ventanaEmergente.crearVentana_Emergente())
      })

const crearProducto = (nombre, precio,id,img) =>{
    const itemContainer = document.createElement("li")
    itemContainer.classList.add("product__item")
    
    const contenido = `<a href="productoSeleccionado.html?id=${id}" class="product__img"><img src="${img}" class="product_img-img"  alt="IMGXD"></a>
        <div class="product__item-text">
        <p class="product__tittle product__text">${nombre}</p>
        <p class="product__price product__text">${precio}</p>
        <span class="product__link product__text"># ${id}</span>
        </div>`

    itemContainer.innerHTML = contenido;
    return itemContainer;
}

const ListaProductos = await server.ListaProductos();
    ListaProductos.forEach(({nombre,precio,id,img}) => {
        lista.appendChild(crearProducto(nombre,precio,id,img));
     });

     validarForm();