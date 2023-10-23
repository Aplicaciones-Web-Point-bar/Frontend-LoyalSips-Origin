<script>
import {BarService} from "../services/bar.service"
import BarCard from "./bar_card.vue";
export default {
  components:{BarCard},
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
          this.drinks=response.data;
          console.log(this.drinks)
        })
  }
};
</script>

<template>
  <div class="title_list">Bares</div>
  <div class="Contenedor_bar_list">
      <bar-card></bar-card>
    <bar-card></bar-card>
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
  border: 2px solid white;
  box-shadow: inset 0 0 10px red, 0 0 10px red;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

</style>
