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


<script>
export default {
  methods:{
    redirectToLogin(){
      this.$router.push('/login-register/sector-election')
    }
  }
}


</script>
