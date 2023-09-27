<script setup>
</script>


<template>
  <div class="espacio">
  </div>
  <div class="home">
    <div class="nombre">
      Bienvenido, <br>
      Jocais Ampudia
    </div>
    <div class="contenedor2">
      <div class="separacion">

        <div class="anuncio">

        </div>
        <div class="anuncio">

        </div>
        <div class="anuncio">

        </div>

      </div>
    </div>
  </div>
</template>

<style>
.espacio{
  height: 6.5%;
}
.home{
  width: 100%;
  height: auto;
}
.nombre{
  font-size:80px;
  padding:   50px;
  color:white;
  font-family: "Arial Black";
  background-color: #343434;
  background-image: url(https://cdn.discordapp.com/attachments/1146639921830973516/1155985278352248852/PZIF43YAXRBZXEBDLIXJHDW7TY.png) ;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contenedor2{
  width: 100%;
  background-color: #323233;
  display: flex;
  align-items: center;
  justify-content: center;
}
.separacion{
  width: 80%;
  height: 500px;
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
}

.anuncio{
  width: 30%;
  background-color: #191921;
  margin:10px;
  border-radius: 40px;

  padding: 10px;
}
</style>
