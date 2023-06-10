const ListaProductos = () => {
    return fetch('https://64518956e1f6f1bb22b27887.mockapi.io/productos')
        .then(response => response.json())
}

const perfiles = () => {
    return fetch('https://64518956e1f6f1bb22b27887.mockapi.io/perfiles')
        .then(respuesta => respuesta.json())
}

const agregarProducto = (nombre, precio, categoria, img) => {

    const id = (uuid.v4()).substring(0, 6)
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const img = reader.result
        return fetch('https://64518956e1f6f1bb22b27887.mockapi.io/productos', {
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
    return fetch(`https://64518956e1f6f1bb22b27887.mockapi.io/productos/${id}`)
        .then(response => response.json())
}

const eliminarProducto = (id)=>{
    return fetch(`https://64518956e1f6f1bb22b27887.mockapi.io/productos/${id}`, {
        method: 'DELETE'
    })
};

export const server = {
    ListaProductos,
    perfiles,
    agregarProducto,
    datosProducto,
    eliminarProducto
}

