<template>
    <div class="wrapper">
      <span class="icon-close">
        <ion-icon name="close"></ion-icon>
      </span>
      <div class="form-box login">
        <h2>Login</h2>

        <form action="#">
          <div class="input-box">
            <span class="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required>
            <label>Email</label>
          </div>


        <!--password-->
          <div class="input-box">
            <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required>
            <label>Password</label>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox">Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" class="btn">Login</button>
          <div class="login-register-cliente">
            <p>Dont have an account? <a href="#" class="register-link">Register</a></p>
          </div>
        </form>
      </div>


      <!--register-->
      <div class="form-box register">
        <h2>Registration</h2>

        <form action="#">
          <div class="input-box">
            <span class="icon"><ion-icon name="person"></ion-icon></span>
            <input type="text" required>
            <label>Username</label>
          </div>

          <div class="input-box">
            <span class="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required>
            <label>Email</label>
          </div>


          <!--password-->
          <div class="input-box">
            <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required>
            <label>Password</label>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox">Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" class="btn">Login</button>
          <div class="login-register-cliente">
            <p>Dont have an account? <a href="#" class="register-link">Register</a></p>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  /*sirve para importar los iconos de login*/
  mounted() {
    // Crear elementos script
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

    const script2 = document.createElement('script');
    script2.nomodule = true;
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

    // Agregar los elementos script al DOM
    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }
}
</script>

<style>

/*<-------SECTION LOGIN----->*/
.wrapper {
  display: flex;
  background: rgba(232, 37, 37, 0.5);
  border: 2px solid #fff;
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 35em;
  margin: 15rem auto;
  overflow: hidden;
  z-index: -1;

}


.wrapper .form-box{
  width: 100%;
  padding: 1rem;
}

/*oculatamos el login*/
.wrapper .form-box.login{
  display: none;
}

.wrapper .icon-close{
  position: absolute;
  top:0;
  right:0;
  width: 45px;
  height: 45px;
  background: #0780a7;
  font-size: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 1.3rem;
  cursor: pointer;
}


.form-box h2{
  font-size: 2em;
  color: #fff;
  text-align: center;
}

.input-box{
  position: relative;
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.input-box label{
  position: absolute;
  top:50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #b8e9ff;
  font-weight: 500;
  pointer-events: none;
  transition: .5s;
}

/*hace que el title de email & password suban ligeramente al hacer click sobre ellos*/
.input-box input:focus ~ label,
.input-box input:valid ~ label{
  top: -5px;
}

.input-box input{
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #fff;
  font-weight: 600;
  padding: 0 1rem 0;
}

.input-box .icon{
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #eadfdf;
  line-height: 57px;
}

/*section remember password*/
.remember-forgot{
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.9em;
  font-weight: 500;
  margin: -0.1rem 0 1.5rem;
}

.remember-forgot label input{
  accent-color: #73dcd0; /*cambiar color*/
  margin-right: 0.5rem;
}

.remember-forgot a{
  color: #01abe1;
  text-decoration: none;
}


.remember-forgot a:hover{
  text-decoration: underline;
}

.btn{
  width: 100%;
  height: 3.4rem;
  background: rgba(1, 171, 225, 0.73);
  border: none;
  outline: none;
  border-radius: 1.3rem;
  cursor: pointer;
  font-size: 1.1rem;
  color:white;
  font-weight: 500;
  margin-top: .9rem;
}

.btn:hover{
  background: rgba(255, 255, 255, 0.89);
  color: #01abe1;
  transition:.5s;
}

.login-register-cliente{
  font-size: .9em;
  color: #fff;
  text-align: center;
  margin: 1.5rem 0 0.4rem; /*margin: 25px 0 10px*/
  font-weight: 500;
}

.login-register-cliente p a {
  color: #01abe1;
  text-decoration: none;
  font-weight: 600;
}

.login-register-cliente p a:hover{
  text-decoration: underline;
}

/*<--------SECTION REGISTER--------->*/



</style>
