<template>
  <div class="profile-section">
    <div class="profile-container">
      <div class="profile-image">
        <img src="https://media.discordapp.net/attachments/1145898392631918606/1163166280489115698/jocais.jpg?ex=653e9603&is=652c2103&hm=f7d07b1964793b81b012d068ee26a7060efb012941d4e95fe2f167b13c50f364&=" alt="Foto de usuario">
      </div>
      <div class="profile-details">
        <h1 class="title-profile">Jocais Ampudia</h1>
        <p>Fecha de Nacimiento: 24/02/2004</p>
        <p>Género: Masculino</p>
        <p>Número de celular: 974 408 952</p>
        <p>Correo: ampudiaflores@gmail.com</p>
      </div>
    </div>
  </div>
</template>



<!--Styles-->
<style scoped>
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:  url("https://media.discordapp.net/attachments/1145898392631918604/1160097541598220308/fondo-perfil.png?ex=65336c07&is=6520f707&hm=2d16ff24972fd76b7926cec7528ddf006641f9aa987aa0b57563b207e9520e92&=&width=1409&height=302");
  background-size: cover;
}

.background-image img {
  width: 100%;
  height: 50vh;
  position: fixed;
  top: 0;
  left: 0;
  background-position: center;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
}

.profile-image img {
  width: 250px;
  height: 350px;
  border-radius: 30%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  object-fit: cover;
  cursor: pointer;
}

.title-profile {
  font-size: 3em;
  margin-top: 1rem;
}

.profile-details {
  font-size: 1.5em;
  line-height: 1.5;
  text-align: center;
  color: #e6e6e6;
  font-weight: normal;
}
</style>



<!--Scripts-->

<script setup>

</script>