<script>
export default {
    name: "app",
    data() {
      return {
        drawer: false,
        items: [
          { label: "Home", to: "/home" },
          { label: "About", to: "/about" },
          { label: 'Services', to: '/services' },
          { label: 'Support', to: '/support'},
          { label: 'Contact', to: '/contact'},
          { label: 'bares', to: '/bares' },
          { label: 'login', to: '/login' },
          { label: 'signup', to: '/signup' }



        ],
      };
    },
};
</script>

<template class="total">
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-gray-800">


      <template #start>
        <img class="img-logo " src="https://media.discordapp.net/attachments/1146639921830973516/1155970551593050222/logo.png" alt="Logo de Mi Sitio Web">
        <div class="flex-column ">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
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
          <a class="bg-auto" >Jose Ampudia   </a>
          <i class="pi pi-user" style="font-size: 2rem"></i>
          <i class="pi-sign-out" style="font-size: 2.5rem"></i>
        </div>



      </template>




    </pv-toolbar>
  </header>

  <pv-sidebar v-model:visible="drawer"> </pv-sidebar>
  <RouterView />
</template>

<style>

html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: rgba(0, 0, 0, 0.91);
  position: relative; /* Agrega esta línea para que el elemento con el nuevo fondo sea relativo a body */
  color: #c5bfbc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
.img-logo{
  width: 80px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.account-logo {
  width: 40px;
  height: auto;
  display: block;
  margin: 0 auto;
}


</style>