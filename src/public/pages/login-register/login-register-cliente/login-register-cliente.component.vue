<template>
  <div class="login-container">
    <div class="wrapper" :class="{active : isActive }">
      <div class="form-box login">
        <h2>Login</h2>
        <div class="details-login">
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
            <div class="login-register-cliente" >
              <p>Dont have an account? <a href="#" class="register-link" @click="toggleActive">Register</a></p>
            </div>
          </form>
        </div>
      </div>


      <!--register-->
      <div class="form-box register">
        <h2 class="title-register">Registration</h2>

        <div class="details-register">
              <form action="#">
                <div class="input-box">
                  <span class="icon"><ion-icon name="person"></ion-icon></span>
                  <input type="text" required>
                  <label>Username</label>
                </div>

                <div class="input-box">
                  <span class="icon"><ion-icon name="call"></ion-icon></span>
                  <input type="tel" required>
                  <label>Phone number</label>
                </div>


                <div class="input-box">
                  <span class="icon"><ion-icon name="id-card"></ion-icon></span>
                  <input type="text" required>
                  <label>DNI</label>
                </div>

                <div class="input-box">
                  <span class="icon"><ion-icon name="calendar"></ion-icon></span>
                  <input type="email" required>
                  <label>Birthdate</label>
                </div>


                <!--password-->
                <div class="input-box">
                  <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                  <input type="password" required>
                  <label>Password</label>
                </div>

                <!--Gender-->
                <div class="gender-details">
                  <input type="radio" name="gender" id="dot-1">
                  <input type="radio" name="gender" id="dot-2">
                  <input type="radio" name="gender" id="dot-3">
                  <span class="gender-title">Gender</span>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Male</span>
                    </label>

                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Female</span>
                    </label>

                    <label for="dot-3">
                      <span class="dot three"></span>
                      <span class="gender">Other</span>
                    </label>

                  </div>
                </div>

                <div class="remember-forgot">
                  <label><input type="checkbox">I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register-cliente">
                  <p>Already have an account? <a href="#" class="login-link" @click="toggleActive">Login</a></p>
                </div>
              </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

.login-container{
  height: calc(100vh - 80px);
  display:grid;
  place-items: center;
  justify-content: center;
  margin-top: 5rem;
}

/*<-------SECTION LOGIN----->*/
.login-container .wrapper {
  position: relative;
  display: flex;
  width: 400px;
  height: 440px;
  background: rgb(49, 48, 48);
  border: 2px solid #fff;
  border-radius: 2rem;
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0 30px rgb(164, 224, 245);
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: height .2s ease;
  overflow: hidden;
  
}

.login-container .wrapper.active{
  height: 720px;
}

.wrapper .form-box{
  width: 100%;
  padding: 1rem;

}

/*hace que el login se mueva a la izquierda*/
.wrapper .form-box.login{
  transition: transform .20s ease;
  transform: translateX(0);
}

/*hace que el login se mueva a la derecha*/
.wrapper.active .form-box.login{
  transition: none;
  transform: translateX(-450px);
}


.wrapper .form-box.register{
  position: absolute;
  transition: none;
  transform: translateX(400px);
  padding: 2.2em;
}

.wrapper.active .form-box.register{
  transition: transform .20s ease;
  transform: translateX(0);
}

.wrapper .title-register{
  font-size: 2em;
  width: 100%;
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
  font-size: 1em;
  font-weight: 500;
  margin: 1.4rem 0 1.5rem;
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

.gender-details .gender-title{
  font-size: 1.1rem;
}

.gender-details .category{
  display: flex;
  width: 80%;
  align-items: center;
  margin: 14px 0;
  justify-content: space-between;
}

.gender-details .category label{
  display: flex;
}


.gender-details .category .dot{
  height: 18px;
  width: 18px;
  background: #d9d9d9;
  border-radius: 50%;
  margin-right: 18px;
  border:5px solid transparent;
  transition: all .6s ease;
}


#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
  border-color: rgb(0, 139, 163);
  background: #ffffff;

}

form input[type="radio"]{
  display: none;
}

form .buttom{
  height: 45px;
  margin-bottom: 3rem;
}

</style>




<script>

export default {
  /*muestra en consola al hacer click se activa tanto login o register*/
  data(){
    return{
      isActive: false
    };
  },



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
  },

  methods:{
    redirectTologin(){
      this.$router.push('/login-register/login-register-cliente')
    },

    toggleActive(){
      this.isActive = !this.isActive;
    }
  }
}




</script>