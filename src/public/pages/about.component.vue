<template>
  <div>
    <h1>About</h1>
    <br>
    <h2>Somos Loyalsips</h2>
    <p>Generando oportunidades para los amantes de la vida nocturna: <br>Donde los consumidores y los negocios se encuentran en un <br> brindis de éxito compartido</p>
  </div>
  <div class="conImage">
    <img class="image" src=" " alt="">
  </div>
  <div class="rectangle"></div>
  <div class="Simage">
    <img class="image" src="" alt="">
  </div>
  <div class="text">
    <p>
      "Loyalsips revoluciona la experiencia de <br>
      en bares, ofreciendo mejoras <br>
      tanto para los clientes como para los <br>
      propietarios. Proporcionamos a los <br>
      dueños de bares las herramientas <br>
      necesarias para un control efectivo de la <br>
      administracion, al tiempo que <br>
      enriquecemos la experiencia <br>
      de los clientes en su establecimiento"
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent', // Nombre del componente
  // Datos, métodos, eventos, etc., van aquí
}
</script>

<style scoped>
body {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: SansSerif, sans-serif;
  background-color: rgba(0, 0, 0, 0.68);
  padding: 5cm;
}

.content {
  display: flex;
  flex-direction: row-reverse; /* Colocar la imagen a la derecha */
  align-items: center;
}

.text {
  flex: 4; /* Ocupar el espacio restante */
}

h1 {
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  margin-top: 1cm;
  text-align: center;
}
h2{
  font-size: 80px;
  font-weight: bold;
  color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  margin-top: 1cm;
  text-align: center;
}
p {
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: justify; /* Alinea el texto a la justificación */
  text-align-last: center; /* Centra la última línea del texto */
}


button {
  background-color: #83838d;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}



.conImage {
  text-align: left;
  margin-right: 1cm;
  margin-left: 3cm;
  margin-top: -6cm;
}


/* En tu archivo CSS o en un bloque de estilo en tu documento HTML */
.rectangle {
  width: 700px; /* Ancho del rectángulo */
  height: 200px; /* Altura del rectángulo */
  background-color: rgba(0, 0, 0, 0.29); /* Color de fondo del rectángulo */
  border: 2px solid rgba(0, 0, 0, 0.3); /* Borde del rectángulo */
  padding: 30px; /* Espacio de relleno dentro del rectángulo */
  text-align: center; /* Centra el contenido del rectángulo horizontalmente */
  margin-right: 10cm;
  margin-left: 16cm;
  margin-top: -4cm;
  border-radius: 15px; /* Ajusta el valor según el radio de curvatura que desees */
}



.Simage {
  max-width: 120%; /* Tamaño máximo de la imagen */
  height: auto; /* Ajusta la altura de la imagen automáticamente */
  text-align: center; /* Centra el contenido del rectángulo horizontalmente */
  margin-right: 1cm;
  margin-left: 11cm;
  margin-top: -6.6cm;
}

.text {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: justify; /* Alinea el texto a la justificación */
  text-align-last: center; /* Centra la última línea del texto */
  margin-right: -8cm;
  margin-left: -9cm;
  margin-top: 1.1cm;
}
</style>
