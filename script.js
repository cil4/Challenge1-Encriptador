document.getElementById("resultado").style.display = "none";

        var btn = document.querySelector("#btn-encrip");
        btn.onclick = encriptar;
        

        

        var btn2 = document.querySelector("#btn-desencrip");
        btn2.onclick = desencriptar;

        var btn3 = document.querySelector("#btn-copiar");
        btn3.onclick = copiar;


function encriptar(){
           
    var  texto = document.getElementById("textoEncriptado").value;
    var textoModif = texto.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, ' ');
    var textoNuevo = textoModif.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("o", "ober")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");


    document.getElementById("aside").style.display="none";
    document.getElementById("descifrado").innerHTML = textoNuevo;
    //document.getElementById("textoEncriptado").value = "";
    document.getElementById("resultado").style.display="block";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

 }
 function desencriptar(){
     var  texto = document.getElementById("textoEncriptado").value.toLowerCase();
     var textoEncriptado = texto.replace(/enter/igm,"e");
     var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
     var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
     var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
     var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

     document.getElementById("aside").style.display="none";
     document.getElementById("descifrado").innerHTML = textoEncriptado;
     //document.getElementById("textoEncriptado").value = " ";
     document.getElementById("btn-copiar").style.display = "show";
     document.getElementById("btn-copiar").style.display = "inherit"; 
 }


 function copiar(){
    var contenido = document.querySelector("#descifrado");
    //contenido.select();
   
   navigator.clipboard.writeText(contenido.value);
   
   alert("El texto ha sido copiado");
 

 }