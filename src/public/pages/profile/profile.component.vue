<!--Html-->
<template>
  <div class="espacio">

  </div>
  <div class="profile-section">

      <!-- Contenedor de perfil con título y foto de usuario -->
      <div class="profile-container">
        <div class="title-profile">Jocais Ampudia</div>

        <div class="profile-image-container">
            <img class="profile-image"
                 src="https://media.discordapp.net/attachments/1145898392631918606/1163166280489115698/jocais.jpg?ex=653e9603&is=652c2103&hm=f7d07b1964793b81b012d068ee26a7060efb012941d4e95fe2f167b13c50f364&="
                 alt="Foto de usuario">
        </div>
      </div>

      <div class="account-details">
        <p>Fecha de Nacimiento: 24/02/2004</p>
        <p>Genero: Masculino</p>
        <p>Numero de celular: 974 408 952</p>
        <p>Correo: ampudiaflores@gmail.com</p>
      </div>
  </div>


</template>


<!--Styles-->
<style>


.profile-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

/* estilos.component.css */
.imagen-fuldl {
  //top: 0;
  //left: 0;
  //z-index: -1;
  //background: linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url("https://media.discordapp.net/attachments/1145898392631918604/1160097541598220308/fondo-perfil.png?ex=65336c07&is=6520f707&hm=2d16ff24972fd76b7926cec7528ddf006641f9aa987aa0b57563b207e9520e92&=&width=1409&height=302");
  //position: absolute;
}

/*
.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: page;
}
*/

/*
.title-profile {
  font-size:4em;
  text-align: center;
  //margin-top: 1.3em;
  //margin-bottom: 1em;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  line-height: 3.7rem;
}
*/
/*
.profile-image-contain  {
  width: auto;
  height: auto;
  margin-left: 5rem; /* Espacio entre el título y la imagen
  margin-right: 2.3rem;
  margin-top: 1rem;
  clip-path: circle(35%);
}
*/




.account-details{
  padding: 9rem;
  max-width: 60em;
  font-family: Inter, sans-serif;
  font-size: 2em;
  line-height: 3.5rem;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
}

</style>


<!--Scripts-->

<script setup>

</script>