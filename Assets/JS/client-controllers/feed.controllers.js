import { server } from "../server_communicator.js"
import { validarForm } from "./validations.js";

const crearCategoria = (genero)=>{
    const categoria =  document.createElement("div");
     categoria.classList.add("products__category-container", genero);
    const encabezado = `<div class="products__category-header">
                            <h3 class="products__category-tittle">${genero}</h3>
                            <a href="#" class="see-All-category">Ver todo</a>
                        </div>
                        <ul class="products__category-list">
                        </ul>`
 
    categoria.innerHTML = encabezado
    contenedor.appendChild(categoria)
    return categoria
 }

 const crearProducto = (nombre, precio,img,id) =>{
    const itemContainer = document.createElement("li")
    itemContainer.classList.add("product__item")
    
    const contenido = `<a href="productoSeleccionado.html?id=${id}" class="product__img"><img class="product_img-img" src="${img}"alt="IMGXD"></a>
        <p class="product__tittle product__text">${nombre}</p>
        <p class="product__price product__text">${precio}</p>
        <a href="productoSeleccionado.html?id=${id}" class="product__link product__text">Ver producto</a>`

    itemContainer.innerHTML = contenido;
    return itemContainer;
    }


const contenedor = document.querySelector("[data-container]");
const lista =  await server.ListaProductos();
lista.forEach(({nombre,precio,img, categoria,id}) => {
    const seccion = contenedor.querySelector(`.${categoria}`)
    if (!seccion){
        if(contenedor.childElementCount < 3 ){
            const nuevaCategoria = crearCategoria(categoria)
            const lista = nuevaCategoria.querySelector(".products__category-list")
            lista.appendChild(crearProducto(nombre,precio,img,id))
        }
    }else{
        const lista = seccion.querySelector(".products__category-list")
        if(lista.childElementCount < 6){
        lista.appendChild(crearProducto(nombre,precio,img,id))
        }
    }
});

validarForm();
