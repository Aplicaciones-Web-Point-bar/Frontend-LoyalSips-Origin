<script>
import {BarService} from "../services/bar.service";

import bar_card from "./bar_card.vue"
export default {
  components:{bar_card},
  name: "bares-list",
  data (){
    return{
      pubs:[],
      bar:{},
      barService: null,
    }
  },
  created() {
    this.barService = new BarService();
    this.barService.getPubs()
        .then((response)=>{
          this.pubs=response.data;
          console.log(this.pubs)
        })
  }};
</script>

<template>
  <div class="title_list">Bares</div>
  <div  class="Contenedor_bar_list">
    <div v-for="bar in pubs" class="Fila_Card_Bar">
      <bar_card :bar = "bar"></bar_card>
    </div>
  </div>
</template>

<style>

.title_list{
  font-family: "Century Schoolbook";
  margin: 50px auto;
  text-align: center;
  font-size: 50px;
  text-shadow: 0 0 5px red, 0 0 15px red;
}

.Contenedor_bar_list{
  height: auto;
  margin: auto;
  width: 90%;
  max-width: 1100px;
  border: 2px solid white;
  box-shadow: inset 0 0 10px red, 0 0 10px red;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.Fila_Card_Bar{
  width: 90%;
}
</style>
