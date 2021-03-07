let reserva = document.getElementById("submit");

reserva.addEventListener("click", () => {
    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let mail = document.getElementById("mail").value;
    let especialidad = document.getElementById("especialidad")
    let especialidadValue = especialidad.options[especialidad.selectedIndex].text;
    let date = document.getElementById("date").value;
    let hora = document.getElementById("hora")
    let horaValue = hora.options[hora.selectedIndex].text;
    //Expresiones
    let expRut = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
    let expName = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    let expApellido = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    let expEdad = /^(\+|\-)?\d+$/;
    let expMail = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
    let expDate = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    
    //Validaciones
    if(!expRut.test(rut)) {
        alert("El Rut no es válido")
        return false;
    }
    else if(!expName.test(nombre)) {
        alert("El Nombre no es válido")
        return false;
    }
   
    else if(!expEdad.test(edad)) {
        alert("La Edad no es válida")
        return false;
    }
    else if(!expMail.test(mail)) {
        alert("El correo no es válido")
        return false;
    }
    else if(!expDate.test(date)) {
        alert("La fecha no es válida")
        return false;
    }
    else if (expRut.test(rut) && expName.test(nombre) && expEdad.test(edad) && expMail.test(mail) && expDate.test(date)) {
        alert(`Estimado(a) ${nombre}, su hora para ${especialidadValue} ha sido reservada para el día ${date} a las ${horaValue} hrs. Además, se le envió un mensaje a su correo ${mail} con el detalle de su cita. Gracias por preferirnos.`)
    }
})