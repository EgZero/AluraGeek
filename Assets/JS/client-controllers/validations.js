export const validarForm = ()=>{
    const forms = document.querySelectorAll("[data-form]")
    forms.forEach(form => () =>{
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
            const inputs = (event.target).querySelectorAll("input")
            inputs.forEach(input => validacion(input))
        })
    })
}

function validacion(input) {

    if (!input.validity.valid) {
        console.log("invalida")
        input.parentElement.classList.add("input-container--invalid");
        (input.parentElement).parentElement.querySelector(".message-error").innerHTML = mostrarError(tipoInput, input)
    } else {
        input.parentElement.classList.remove("input-container--invalid")
        (input.parentElement).parentElement.querySelector(".message-error").innerHTML = ""
    }
}

const mostrarError = (tipoInput, input)=>{
        let mensaje = "";
    
        mensajesError.forEach(error => {
            if (input.validity[error]) {
                mensaje = mensajesError[tipoInput][error];
            }
    
        });
        return mensaje
    
}

const mensajesError = {

    email: {
        valueMissing: "Ingresa tu email para continuar",
        typeMismatch: "El email es invalido"
    },
    password: {
        valueMissing: "Ingresa tu contraseña para continuar",
        patterMismatch: "La contraseña debe contener al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una mayuscula, un numero y no incluir caracteres especiales"
    }

}