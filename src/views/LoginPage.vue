<template>
    <ion-content class="ion-padding">
        <div class="text-welcome">
            <ion-text color="dark" >
                <p class="title-welcome"><strong>Hola,</strong></p>
                <p class="subtitle-welcome">Bienvenido !</p>
            </ion-text>
        </div>
        
        <div class="form-login">
            <div class="mb-4">
                <label for="emailnput" class="form-label ps-1">Email</label>
                <input type="email" class="form-control" id="emailnput" placeholder="Ingresa tu email">
            </div>
            <div >
                <label for="passInput" class="form-label ps-1">Contraseña</label>
                <input type="password" class="form-control" id="passInput" placeholder="Ingresa tu contraseña">
            </div>
            <ion-text color="primary">
                <p class="forgetPass ps-1 mt-2">Olvidaste tu contraseña</p>
            </ion-text>
        </div>

        <div class="login-button px-3">
            <ion-button expand="block" fill="solid" size="large">
                <ion-text >Iniciar sesion</ion-text> 
                <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
            </ion-button>             
        </div>

        <div class="text-between-lines px-5">
            <hr class="line" />
            <span class="text-line">O inicia sesion con:</span>
            <hr class="line" />
        </div>

        <div class="content-login-social d-flex justify-content-center">
            <ion-chip>
                <ion-avatar>
                    <img alt="Silhouette of a person's head" src="/images/icons8-google-240.png" />
                </ion-avatar>
                <ion-label>Google</ion-label>
            </ion-chip>
        </div>

        <div class="create_account mt-5 d-flex justify-content-center">
            <ion-text color="primary">
                <p class="forgetPass ps-1 mt-2">No tienes una cuenta ? <strong>Crea una</strong></p>
            </ion-text>
        </div>
    </ion-content>
    <!-- <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="ion-text-center">
          <h2>Bienvenido</h2>
          <ion-button expand="block" @click="loginWithGoogle">
            Iniciar sesión con Google
          </ion-button>
        </div>
      </ion-content>
    </ion-page> -->
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import { useFirestore } from 'vuefire';
    import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import { arrowForwardOutline, logoGoogle } from 'ionicons/icons';

    const auth = getAuth();
    const isAuthenticated = ref(false);

    const loginWithGoogle = async () => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        isAuthenticated.value = true;
        // Aquí puedes realizar alguna acción después de iniciar sesión exitosamente
      } catch (error) {
        console.error(error);
        // Manejo de errores en caso de fallo en el inicio de sesión con Google
      }
    };

  </script>
  
  <style scoped>
  .ion-text-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .text-welcome{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px; 
    margin-top: 5rem;
    padding-left: 20px;
    padding-right: 20px;
  }
  p{ margin-bottom: 0rem; 
    font-family: Poppins;
    font-size: 28px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
 }
 .form-login{
    font-family: 'Poppins';
    margin-top: 5rem;
    padding-left: 20px;
    padding-right: 20px;
 }
 .form-control{
    padding: 0.8rem 0.75rem;
    border-radius: 10px;
 }
 .forgetPass{
    font-size: 11px;
    line-height: 16px;
    font-style: normal;
    color: #FF9C00;
 }
 .login-button{
    margin-top: 3rem;
 }
 .text-between-lines {
  font-family: 'Poppins';
  display: flex;
  align-items: center;
}

.line {
  flex-grow: 1;
  border: none;
  border-top: 1px solid black;
  color: #D9D9D9;
}

.text-line {
  padding: 0 10px;
  color: #D9D9D9;
}
  </style>
  