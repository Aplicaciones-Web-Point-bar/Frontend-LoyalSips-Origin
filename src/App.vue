<script>
export default {
    name: "app",
    data() {
      return {
        drawer: false,
        /*Muestra las secciones en el toolbar*/
        items: [
          { label: "Home", to: "/home" },
          { label: 'Bares', to: '/bares' },
          { label: 'Profile', to: '/profile'},
          { label: 'Support', to: '/support'},
          { label: 'Login', to: '/login-register/sector-election'}

        ],
      };
    },
};
</script>



<template>
  <header class="navbar">

    <pv-toolbar class="bg-gray-800">


      <template #start>
        <img class="img-logo " src="https://media.discordapp.net/attachments/1146639921830973516/1155970551593050222/logo.png" alt="logo-loyal-sips-navbar">
        <div class="flex-column ">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label">

            <pv-button class="p-button-text text-white bg-gray-800"
                       :href="href"
                       @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </template>

      <template #center>

      </template>

      <template #end>

        <div class="flex-column" >
          <a class="bg-auto" >Jocais Ampudia </a>
          <i class="pi pi-user" style="font-size: 2rem"></i>
          <!-- <i class="pi-sign-out" style="font-size: 2.5rem"></i> -->
        </div>
      </template>
    </pv-toolbar>
  </header>
  <RouterView />

</template>

<style>


/*fijo el navbar estatico*/
.navbar{
  position:fixed;
  top: 0;
  width: 100%;
  z-index: 10; /*coloco al navbar delante de todo */
}


body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: rgba(0, 0, 0, 0.91);
  //position: relative; /* Agrega esta línea para que el elemento con el nuevo fondo sea relativo a body */
  color: #ffffff;

}



.img-logo{
  width: 80px;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>