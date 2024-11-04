document.getElementById("buttonText").addEventListener("click", function(){
        let dato = document.getElementById("inputText").value;
        if(dato){
            localStorage.setItem("datoGuardado", dato);
            window.location.href = "data.html";
        }else{
            alert("Por favor ingrese un dato")
        }
})