<template>
  <div>
    <div class="container-contact">
      <h1 class="titulo-contact">Contacto</h1>
      <p class="p-titulo">
        "Estamos aquí para atender tus necesidades con un servicio de primera en la industria de la vida nocturna. ¡Contáctanos y hagamos crecer juntos tu negocio!"
      </p>
    </div>

    <section class="section-container-contact">
      <div class="left">
        <section id="formulario">
          <h2 class="titulo-formulario">Formulario de Contacto</h2>
          <form @submit.prevent="submitForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="formData.nombre" required>

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" v-model="formData.mensaje" rows="4" required></textarea>

            <input type="submit" value="Enviar">
          </form>
        </section>
      </div>
      <div class="right">
        <div class="contenido-derecha">
          <h2>Información </h2>
          <img
              width="200px"
              alt=""
          />
          <p>123 Calle Magdalena Lima, Surco.</p>
          <p>+51 989836726</p>
          <p>Lima, Perú</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: "",
        email: "",
        mensaje: ""
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar el código para enviar el formulario, por ejemplo, haciendo una solicitud HTTP
      // utilizando axios o fetch.
      // this.formData contiene los datos del formulario.
    }
  }
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.container-contact {
  background-color: #171717;
  text-align: center;
  padding: 20px;
}

.titulo-contact {
  font-size:4em;
  text-align: center;
  margin-top: 1.4em;
  margin-bottom: 1em;
  color: #c5bfbc;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
}

.p-titulo {
  font-size: 1.2em;
  line-height: 1.4em;
  color: #c5bfbc;
  text-align: center;
  margin: 0 auto;
  max-width: 800px; /* Ajusta el ancho máximo según tu diseño */

}

/* Estilos para el formulario de contacto */
#formulario {
  background-color: #4b4a4a;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#formulario h2 {
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #ffffff;
}

#formulario label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

#formulario input[type="text"],
#formulario input[type="email"],
#formulario textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

#formulario input[type="submit"] {
  background-color: #DE9400;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.section-container-contact{
  display: flex;
  background-color: #171717;
  padding: 30px;
  justify-content: space-between;
}
/* Estilos para la sección izquierda (formulario) */
.left {
  background-color: #4b4a4a;
  margin: 80px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 30%;
  padding: 90px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}



/* Estilos para la sección derecha (contenido adicional) */
.right {
  margin: 80px;
  background-color: #4b4a4a;
  padding: 90px;
  border-radius: 5px;

  width: 30%;


  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); /* Sombra para el contenedor */
}

.right h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #fff;
}

.right p {
  font-size: 1.2em;
  line-height: 1.4em;
  color: #ffffff;
}



/* Estilos para el contenido dentro de la sección derecha */
.contenido-derecha {
  text-align: center;

}

.contenido-derecha h2 {
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 40px;
}

.contenido-derecha img {
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
}

.contenido-derecha p {
  font-size: 1.2em;
  color: #fff;
  justify-content: center ;
}
</style>
