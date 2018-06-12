function contar() {
  let max = "140"; 
  let contadorTexto = document.getElementById("textId").value; 
  let contadorEnSi = contadorTexto.length; 

  if(contadorEnSi <= max) { 
      document.getElementById("contador").value = max-contadorEnSi; 
  } else if (contadorEnSi >= max){ 
      document.getElementById("textId").value = contadorEnSi.substr();
  } else {
      document.getElementById("textId").value = contadorTexto.substr(0, max);
  }
};

const boton = document.getElementById("btn");

boton.addEventListener("click" , () => { 
  let texto = document.getElementById("textId");
  let texto2 = document.getElementById("textId2");
  document.getElementById("textId2").value = document.getElementById("textId").value;
  document.getElementById("textId").value = " ";

  if (texto.length === 0 || texto === null ) {
    alert("Ingresa un texto primero");
    return false; 
  }
});