let menuVisible=false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=true;
}


/* formulario*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    const email = document.getElementById("email").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let isValid = true;

   
    const emailError = document.getElementById("emailError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Por favor, ingrese un email válido.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    
    const nombreError = document.getElementById("nombreError");
    if (nombre.length < 2) {
        nombreError.textContent = "El nombre debe tener al menos 2 caracteres.";
        isValid = false;
    } else {
        nombreError.textContent = "";
    }

    
    const mensajeError = document.getElementById("mensajeError");
    if (mensaje.length < 5) {
        mensajeError.textContent = "El mensaje debe tener al menos 5 caracteres.";
        isValid = false;
    } else {
        mensajeError.textContent = "";
    }

    
    if (isValid) {
        alert("Mensaje enviado con éxito.");
        document.getElementById("contactForm").reset(); 
    }
});