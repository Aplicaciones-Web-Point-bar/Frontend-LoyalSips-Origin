<template>
  <div class="titulo-servicios">
    <h1>Servicios</h1></div>

  <div class="servicios-container">
    <div class="fondo-gris"></div>
    <div class="servicio-box cliente-container">
      <h3><b>Clientes</b></h3>
      <div align="justify">
        <p>"Para nuestros clientes, les brindamos la posibilidad de
          comprar productos y acumular puntos que pueden canjear por
          recompensas. Además, les mantenemos al tanto de los eventos
          y promociones más recientes que los bares deseen destacar,
          brindando una experiencia completa y gratificante en sus
          salidas nocturnas.".</p><br><br>
      </div>
      <button class="empezar-button-clientes">Empezar</button>
    </div>

    <div class="servicio-box bar-container">
      <h3><b>Bares</b></h3>
      <div align="justify">
        <p>"Para los profesionales del sector de bares, proporcionamos una solución completa que incluye la gestión del
          inventario y la promoción de productos, así como la capacidad de destacar y promocionar eventos especiales que
          deseen organizar. Nuestra plataforma brinda herramientas integrales para optimizar la operación de su negocio y
          aumentar la visibilidad de sus ofertas.".</p><br><br>
      </div>
      <button class="empezar-button-bar">Empezar</button>
    </div>
  </div>

</template>

<style>
.servicios-container {
  position: relative;
  text-align: center;
  padding: 20px;
}

.fondo-gris {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: -1;
}

.titulo-servicios {
  margin-top: 1em;
  text-align: center;
  font-size: 2em;
  color: #c5bfbc;
  font-family: 'Inter', sans-serif;
}

.servicio-box {
  margin: 2%;
  padding: 2%;
  border: 5px solid #ccc;
  border-radius: 25px;
  display: inline-block;
  flex-direction: column;

}

.empezar-button-bar,
.empezar-button-clientes {
  margin-top: auto;
  min-height: 50px; /* Establece una altura mínima para los botones */
  display: inline-block; /* Establece el contenedor de los botones como flex */
  align-items: center; /* Centra verticalmente el contenido de los botones */
  justify-content: center; /* Centra horizontalmente el contenido de los botones */
}



.cliente-container{
  background-color: rgb(13, 166, 225);
  max-width: 37em;
  overflow: hidden;
  box-shadow: 0 0 80px rgb(48, 111, 136);
  height: 37em; /* Establece la altura fija para ambos cuadros */
}
.bar-container {
  background-color: rgb(173, 91, 222);
  max-width: 37em;
  overflow: hidden;
  box-shadow: 0 0 80px rgb(109, 55, 141);
  height: 37em; /* Establece la altura fija para ambos cuadros */
}

h3 {
  font-size: 3em;
  margin-bottom: 1em;
}

p {
  font-size: 1.6em;
  line-height: 1.3em;
  color: #000000;
}

h2 {
  font-size: 1.9em;
  margin-bottom: 1em;
}


.empezar-button-bar {
  background-color: rgba(69, 28, 90, 1);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.empezar-button-clientes {
  background-color: rgb(0, 108, 140);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}


</style>
<script setup>
</script>