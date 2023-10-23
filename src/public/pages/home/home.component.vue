<!--html-->

<template>
  <div class="home">
    <img src="https://media.discordapp.net/attachments/1145898392631918604/1159951271067910164/fondo-home.png?ex=6532e3cd&is=65206ecd&hm=44a281648a918735584f14d785444d7176a914cc4893bbb7ee9fd4458c297f5b&=&width=1114&height=625">
  </div>

    <div class="contenedor">
      <div class="Titulo">Bienvenido a LoyalSips</div>
      <div class="Subtitulo">Puedes ganar puntos y reclamarlos en los bares que más consumas</div>
      <div class="boton-get-started" @click="redirectToLogin">
        <button class="get-boton">Get Started</button>
      </div>
    </div>
</template>



<!--styles-->

<style>



.home{
  /*background-image:linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.90));

   */
}


.Titulo {
<style scoped>

.con {
  //background-image:linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.90)),
  //url("https://media.discordapp.net/attachments/1145898392631918604/1159951271067910164/fondo-home.png?ex=6532e3cd&is=65206ecd&hm=44a281648a918735584f14d785444d7176a914cc4893bbb7ee9fd4458c297f5b&=&width=1114&height=625");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: SansSerif, sans-serif;
  margin: 0;
  position: ;
  color: #ffffff;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0); /* Cambia el valor de alfa para ajustar la opacidad */
  z-index: -1; /* Coloca la capa detrás del contenido */
}

.contenedor{
  padding: 15rem;
}




.get-boton {


</style>



<!--scripts-->

<script>
export default {
  methods:{
    redirectToLogin(){
      this.$router.push('/login-register/sector-election')
    }
  }
}

button:hover {
  background-color: #3e3e3e;
}



</style>
