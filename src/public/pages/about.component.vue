<template>
  <div class="about-container">
    <div class="titulo-about">
      <h1>About</h1>
    </div>
    <div class="about-content">
      <div class="logo">
        <img src="/src/assets/LoyalSips-logoOK.png" alt="LoyalSips Logo" />
      </div>
      <div class="description">
        <h2>Somos LoyalSips</h2>
        <div class="descripcion-text">
          <p>
            LoyalSips es una empresa dedicada a proporcionar soluciones innovadoras
            para bares y clientes. Nuestro objetivo es brindar la mejor experiencia
            en la industria de la vida nocturna, conectando a bares con sus clientes
            de manera efectiva y recompensando a nuestros leales usuarios.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>









<style>
/* En tu archivo de estilos */
.about-container {
  text-align: center;
  color: #c5bfbc;
  font-family: 'Inter', sans-serif;
  margin-top: 2em; /* Ajusta el margen superior según tus preferencias */
  margin-bottom: 1em;
}

.titulo-about {
  font-size: 3rem;
}

.about-content {
  display: flex;
  align-items: center;
  margin-top: 20px; /* Ajusta el margen superior según tus preferencias */
}

.logo img {
  max-width: 200px; /* Ajusta el tamaño del logo según tus preferencias */
  margin-right: 20px; /* Ajusta el margen derecho según tus preferencias */
}

.description {
  flex: 1;
}

.description h2 {
  font-size: 2rem;
  margin-bottom: 10px; /* Espacio entre el título y la descripción */
}

.descripcion-text {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #82ff0c; /* Cambia este valor al color que desees para la descripción */
}


</style>
<script setup>
</script>