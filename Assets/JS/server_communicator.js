const ListaProductos = () => {
    return fetch('http://localhost:3000/productos')
        .then(response => response.json())
}

const perfiles = () => {
    return fetch('http://localhost:3000/perfiles')
        .then(respuesta => respuesta.json())
}

const agregarProducto = (nombre, precio, categoria, img) => {

    const id = (uuid.v4()).substring(0, 6)
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const img = reader.result
        return fetch('http://localhost:3000/productos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, precio, categoria, img, id })
        })
    })

    reader.readAsDataURL(img)
}

const datosProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`)
        .then(response => response.json())
}

export const server = {
    ListaProductos,
    perfiles,
    agregarProducto,
    datosProducto
}

