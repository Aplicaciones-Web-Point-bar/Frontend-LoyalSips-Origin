<script>
export default {
  name: "bar_card",
  props: {
    bar: null,
  },
};
</script>

<template>
<div class="Content_cards">
  <div class="imagen_card_bar">
    <img :src="bar.fotos[0]">
  </div>
  <div class="content_card">
    <div class="superior">
      <div class="title_card_bar">
        <img :src="bar.logo">
        {{ bar.name }}
      </div>
      <div class="div_puntuacion">
        <i class="pi pi-eye" style="font-size: 1.5rem"></i>
        <h5>120</h5>
        <i class="pi pi-user" style="font-size: 1.5rem"></i>
        <h5>25 </h5>
        <pv-rating
            v-model="value" :cancel="false"
            :model-value="bar.puntaje"
            :color="red"
        ></pv-rating>
      </div>

    </div>
    <div class="inferior">
      <p>Descripción: <br>{{ bar.description }}</p>
      <div class="espacio_boton">
        <h6>Ubicaión: <br> {{bar.ubicacion}}</h6>
        <a :href="'/bar/'+bar.id" class="boton_card_bar">Ver detalles</a>

      </div>
    </div>
  </div>

</div>
</template>

<style>
.Content_cards{
  height: 200px;
  width: 100%;
  border: 2px solid white;
  box-shadow: inset 0 0 20px #4500cb, 0 0 20px #4500cb;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
}
.boton_card_bar{
  min-width: 98px;
  height: 35px;
  position: relative;
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 15px;
  border: 1px solid white;
  box-shadow: 0 0 5px blue, 0 0 5px blue,0 0 10px blue;
  border-radius: 5px;
  padding: 8px;
  transition: 0.4s;
}
.boton_card_bar:hover{
  background: blue;
}
.imagen_card_bar{
  margin-left: 15px;
  width: 28%;
  min-width: 130px;
  max-width: 250px;
  height: 170px;
  object-fit: cover;
  display: flex;
}
.imagen_card_bar img{
  width: 0;
  flex-grow: 1;
  object-fit: cover;
  border-radius: 5px;
}
.content_card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68%;
  height: 90%;
  margin: 0 10px;
}
.superior{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.div_puntuacion{
  display: flex;
  align-items: center;
}
.div_puntuacion h5 {
  display: flex;
  align-items: center;
  margin: 0 8px;
}
.inferior{
  display: flex;
  height: 69%;
}
.inferior p{
  font-size: 13px;
}
.title_card_bar{
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 30px;
}
.title_card_bar img{
  height: 50px;
  margin-right: 10px;
}
.espacio_boton{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.espacio_boton h6{
  font-family: "Arial Black";
  font-size: 14px;
  margin: 0;
}
</style>