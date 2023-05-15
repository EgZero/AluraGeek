import { server } from "../server_communicator.js";

const obtenerInformacion = async ()=> {
    const location = new URL(window.location);
    const id = location.searchParams.get("id")
    const datos = await server.datosProducto(id)
    const seccion = document.querySelector("[data-seccion]")

    const contenedor = document.createElement("div")
    contenedor.classList.add("resenia")
    const contenido = `
                     <img class="resenia__img" src="Assets/IMG/header/ImagenSVG.svg" alt="IMGXD">
                        <div class="resenia__content">
                            <h2 class="resenia__title">${datos.nombre}</h2>
                            <span class="resenia__price">${datos.precio}</span>
                            <p class="resenia__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                                esse
                                perspiciatis est qui minima nostrum aperiam delectus eligendi suscipit totam. Delectus libero
                                neque
                                repellendus fuga soluta architecto? Dolore, a id!</p>
                        </div>`;
    contenedor.innerHTML = contenido;
    seccion.appendChild(contenedor);
    return datos
}

const crearRelacionados = async ()=>{

    const seccion = document.querySelector("[data-seccion]")
    const contenedor = document.createElement("div");
    contenedor.classList.add("similares");
    contenedor.innerHTML = `<h3 class="similares__title">Productos similares</h3>`
    const lista = document.createElement("ul");
    lista.classList.add("products__category-list");
    const datoCategoria = await obtenerInformacion();
    const productos = await server.ListaProductos();
    productos.forEach(({nombre,precio,img, categoria,id}) => {
        if(categoria == datoCategoria.categoria){
            const item = document.createElement("li");
            item.classList.add("product__item");
            item.innerHTML = `<a href="ProductoSeleccionado.html?id=${id}" class="product__img"><img src="${img}" alt="Image"></a>
                                <p class="product__tittle product__text">${nombre}</p>
                                <p class="product__price product__text">${precio}</p>
                                <a href="ProductoSeleccionado.html?id=${id}" class="product__link product__text">Ver producto</a>`
            lista.appendChild(item);
        }
    })
    contenedor.appendChild(lista);
    seccion.appendChild(contenedor);     
}
crearRelacionados();
validarForm();