<script>
export default {
  name: "bar-card",

};
</script>

<template>
<div class="Content_cards">
  <div class="imagen_card_bar">
    <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1165901378028306452/Carnaval_cEricMohl_header.png?ex=65488945&is=65361445&hm=ffabc2d2d3294681ddca3184c39a32c2097920d60a6ebb7db40ff2adcb8f91ae&">
  </div>
  <div class="content_card">
    <div class="superior">
      <div class="title_card_bar">My bar</div>
      <pv-rating
          v-model="value" :cancel="false"
          :model-value="3"
          :color="red"
      ></pv-rating>
    </div>
    <div class="inferior">
      <p>Descripción: <br>El bar mas aclamado por todos nosotros ya se encuentra aqui en peru, no te pierdas este super evento.</p>
      <div class="espacio_boton">
        <a href="#" class="boton_card_bar">Ver detalles</a>

      </div>
    </div>
  </div>

</div>
</template>

<style>
.Content_cards{
  height: 200px;
  width: 95%;
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
  width: 31%;
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

.inferior{
  display: flex;
  height: 69%;
}
.title_card_bar{
  margin: 10px;
  font-size: 30px;
}
.espacio_boton{
  display: flex;

  align-items: end;
}
</style>