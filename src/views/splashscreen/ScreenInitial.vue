<template>
    <div class="ion-page">
      <ion-content class="ion-padding">
            <div class="image-front-initial">
                <ion-img src="/images/logo_white.png"></ion-img>
                <ion-text class="text-title">Facíl Recetas</ion-text>                
            </div>
            <div class="medium-button">
                <ion-button size="large" router-link="/login" >
                    <ion-text >Comenzar</ion-text> 
                    <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
                </ion-button>             
            </div>
      </ion-content>
    </div>
  </template>
  
<style scoped>
    .image-front-initial{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 14px;

        position: absolute;
        width: 244px;
        height: 120px;
        left: 83px;
        top: 104px;
    }
    .text-title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 27px;
        color: #FFFFFF;
        text-align: center;
    }
    .medium-button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 50px;
        gap: 9px;

        position: absolute;
        width: 269px;
        height: 54px;
        left: 66px;
        top: 674px;
    }
    /* Opcional: Establecer la altura del componente ion-content al 100% de la ventana */
    ion-content {
        --background:  linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 0.01%, #000000 99.99%), url('/images/bg-initial-375x812.jpg');
    }
    ion-button {
        --background: #e07731;

    }

</style>
<script lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { arrowForwardOutline } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton, IonIcon },
    setup() {
      return { arrowForwardOutline };
    },
  });
</script>