<!--html-->

<template>
  <div class="home-section">
      <div class="Titulo">Bienvenido a LoyalSips</div>
      <div class="Subtitulo">Puedes ganar puntos y reclamarlos en los bares que más consumas</div>

        <button class="get-start-boton" @click="redirectToLogin">Get Started</button>
  </div>
</template>



<!--styles-->

<style>



/*coloco la imagen de fondo*/
.home-section {
  background-image:linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.90)),
  url("https://media.discordapp.net/attachments/1145898392631918604/1159951271067910164/fondo-home.png?ex=6532e3cd&is=65206ecd&hm=44a281648a918735584f14d785444d7176a914cc4893bbb7ee9fd4458c297f5b&=&width=1114&height=625");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding-top: 10rem;
}


.Titulo {
  font-size: 5rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center; /* Centra horizontalmente el texto */
  margin-top: 10rem; /*espaciado superior*/
  margin-bottom: 3.4rem;
  line-height: 5rem;
}

.Subtitulo {
  font-size: 1.4rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4em;
  line-height: 1.5rem;
}

.get-start-boton{
  background-color: #83838d;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 1.7rem;
  padding: 1.2rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 6rem rgb(178, 170, 168);
}

.get-start-boton:hover {
  background-color: rgb(178, 170, 168);
}

</style>



<!--scripts-->

<script>
export default {
  methods:{
    redirectToLogin(){
      this.$router.push('/login-register/sector-election');
    }
  }
}
</script>
```