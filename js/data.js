document.addEventListener("DOMContentLoaded", function(){
    let dato = localStorage.getItem("datoGuardado")
    if(dato){
        document.getElementById("data").textContent = dato;
    }else{
        docuement.getElementById("data").textContent = "No hay datos";
    }   
})