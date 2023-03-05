document.getElementById("educacionBtn").addEventListener("click", function(){
    var educacionInfo = document.getElementById("educacionInfo");
    if (educacionInfo.style.display === "none") {
      educacionInfo.style.display = "block";
      document.getElementById("educacionBtn").innerHTML = "Ocultar";
    } else {
      educacionInfo.style.display = "none";
      document.getElementById("educacionBtn").innerHTML = "Mostrar más";
    }
  });
  
  document.getElementById("experienciaBtn").addEventListener("click", function(){
    var experienciaInfo = document.getElementById("experienciaInfo");
    if (experienciaInfo.style.display === "none") {
      experienciaInfo.style.display = "block";
      document.getElementById("experienciaBtn").innerHTML = "Ocultar";
    } else {
      experienciaInfo.style.display = "none";
      document.getElementById("experienciaBtn").innerHTML = "Mostrar más";
    }
  });
  