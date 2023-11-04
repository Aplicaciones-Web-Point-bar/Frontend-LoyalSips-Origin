<!--html-->
<template>
  <div class="container-login">
    <div class="image-sectores">
      <img src="../../../../assets/cliente.png">
      <img src="../../../../assets/empresario.png">
    </div>

    <div class="welcome-login">
      <h1 class="title-login">Bienvenido</h1>

      <divider class="sector-Cliente" @click="redirectToClientLogin">
      <p class="subtitle-login subtitle-ciente">¿Eres cliente?</p>
      <button class="button-login button-cliente">Click Aquí</button>
      </divider>

      <divider class="sector-Empresa" @click="redirectToEmpresaLogin">
        <p class="subtitle-login subtitle-emrpesa">¿Sector empresarial?</p>
        <button class="button-login button-empresa">Click Aquí</button>
      </divider>
    </div>
  </div>

</template>


<!--Styles-->

<style>

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin-top: 8rem;
}

.image-sectores {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.image-sectores img {
  margin: 2rem;

}

.title-login {
  font-size: 2.8rem;
  color: #fff;
  margin: 2rem 0;
}

.subtitle-ciente{
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.button-cliente {
  background-color: rgba(17, 135, 173, 1);
  color: white;
  border:none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  min-width: 20rem;
  padding: 0.8rem 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 6rem rgba(17, 135, 173, 0.66);

  cursor: pointer;


}

.button-cliente:hover {
  background-color: rgb(13, 178, 231);
}

.subtitle-emrpesa{
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.button-empresa {
  background-color: rgba(146, 63, 183, 1);
  color: white;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  border: none;
  min-width: 20rem;
  padding: 0.8rem 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 6rem rgba(146, 63, 183, 0.66);

  cursor: pointer;


}

.button-empresa:hover {
  background-color: rgb(201, 92, 248);
}

</style>


<!--Scripts-->
<script>
/*enrutamos con metodos para la redireccion al hacer click en el boton de elegir sector*/
export default {
  methods:{
    redirectToClientLogin(){
      this.$router.push('/login-register/login-register-cliente')
    },

    redirectToEmpresaLogin(){
      this.$router.push('/login-register/login-register-empresa');
    }
  }
}

</script>
