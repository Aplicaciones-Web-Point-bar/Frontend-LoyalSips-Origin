<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-container">
        <label for="username">User:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input-container">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required>
        <input type="checkbox" id="showPassword" v-model="showPassword"> Show Password
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    login() {
      // Handle the login logic here
      // You can access the username, password, and showPassword using this.username, this.password, and this.showPassword
      // For example, you can send a login request to a server here.
      // Once the login is successful, you can redirect the user to another page.
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
.container {
  background-color: #7d7c7c;
  border-radius: 9px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 100px auto;
  max-width: 400px;
  padding: 40px;
  text-align: center;
}

h2 {
  color: #ffffff;
}

form {
  text-align: left;
}

.input-container {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #ff5e00;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
}

button:hover {
  background-color: #ff9100;
}

#showPassword {
  margin-left: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #ff9300;
}

#showPassword:hover {
  text-decoration: underline;
}

</style>
