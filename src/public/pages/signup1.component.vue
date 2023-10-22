<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="nombre">UserName:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div>
        <label for="apellido">Last Name:</label>
        <input type="text" id="apellido" v-model="apellido" required>
      </div>
      <div>
        <label for="edad">Age</label>
        <input type="number" id="edad" v-model="edad" required min="18">
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" id="genero_masculino" v-model="genero" value="Masculino" required>
        <label for="genero_masculino">Male</label>
        <input type="radio" id="genero_femenino" v-model="genero" value="Femenino" required>
        <label for="genero_femenino">Female</label>
      </div>
      <div>
        <label for="correo">Email:</label>
        <input type="email" id="correo" v-model="correo" required>
      </div>
      <div>
        <label for="contrasena">Password:</label>
        <input type="password" id="contrasena" v-model="contrasena" required>
      </div>
      <div>
        <label for="confirmar_contrasena">Confirmar Contraseña:</label>
        <input type="password" id="confirmar_contrasena" v-model="confirmar_contrasena" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>

    <div class="conImage">
      <img class="image" src="https://media.discordapp.net/attachments/610911183339388978/1157200387665825862/logo-loyal-sips-seccion-nosotros.png?ex=6517be58&is=65166cd8&hm=0a631b212835c60cac805b74fe5474ec3738c644efe94d7849b04256e47ff93a&=" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: '',
      genero: '',
      correo: '',
      contrasena: '',
      confirmar_contrasena: ''
    };
  },
  methods: {
    signup() {
      // Handle the signup logic here
      // You can access the form fields using this.nombre, this.apellido, etc.
      // Perform any validation and submit the data to the server.
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
body {
  background-image: url('https://media.discordapp.net/attachments/610911183339388978/1157200538623025182/fondo2.png?ex=6517be7c&is=65166cfc&hm=c9f9ebecd756d53f0262623bad42b4d76b44cb660801bce28f7c3028d2efb769&=');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: SansSerif, sans-serif;
  background-color: rgba(0, 0, 0, 0.68);
  padding: 4cm;
}

h2 {
  text-align: center;
  margin: 20px 0;
}

form {
  background-color: #7d7c7c;
  border-radius: 9px;
  margin: 180px auto;
  max-width: 400px;
  padding: 40px;
  text-align: center;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
input[type="radio"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="radio"] {
  display: inline-block;
  margin-right: 5px;
}

button[type="submit"] {
  background-color: #ff4700;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #ff8000;
}

.conImage {
  text-align: center;
  margin-top: -68em;
}


</style>
