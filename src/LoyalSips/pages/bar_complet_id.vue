<script>
import {BarService} from"../services/bar.service";
import axios from "axios";
export default {
  name:"bar-completd",

  data(){
    return{
      bar:{}
    }
  },
  created(){
    this.barService = new BarService();
    this.barService.getBarId(this.$route.params.id)
        .then((response)=>{
          this.bar=response.data;
          console.log(this.bar)
        })
        .catch(error => {
          console.log('Error al obtener el valor del enlace:');
        });
  },
}

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

</style>