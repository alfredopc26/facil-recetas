<template>
  <ion-card class="card-recipe-post pb-3">
      <ion-card-content class="content-recipe-top p-0">
          <img :src="image" alt="image recipes top" class="full-img">
      </ion-card-content>
      <div class="content-save">
          <ion-icon class="button-save" slot="icon-only" v-if="!saved" :icon="bookmarkOutline"></ion-icon>
          <ion-icon class="button-save" slot="icon-only" v-if="saved" :icon="bookmark"></ion-icon>
      </div>
      <ChipBase class="chip-time py-1"
              :avatar="'images/time-left.png'"
              :label="time + ' minutos'"
          ></ChipBase>
      <ChipBase class="chip-ingredient"
          :avatar="'images/ingredient.png'"
          :label="ingredientTotal + ' ingredientes'"
      ></ChipBase>
      <p class="title-recipe">
          {{ title }}
      </p>
  </ion-card>
</template>
<style scoped>
  .card-recipe-post{
      width: 170px;
      height: 206px;
      flex-shrink: 0;
  }      
  .content-recipe-top::after{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(350.98deg, rgba(0, 0, 0, 0.8) 0.01%, transparent);
  }
  .full-img {
      object-fit: cover;
      border-radius: 10px;
      }


  .chip-time{
      position: absolute;
      top: 69px;
      right: 27px;
      width: 120px;
      background: rgba(255, 255, 255, 0.4);
      font-size: 10px;
  }

  .chip-ingredient{
      position: absolute;
      top: 127px;
      right: 30px;
      background: rgba(255, 255, 255, 0.4);
      font-size: 10px;
  }

  .button-save{
      width: 34px;
      height: 45px;
      color: white;
  }

  .content-save{
      position: absolute;
      top: 9px;
      right: 3px;
      border-radius: 10px;
  }

  .title-recipe{
      text-align: start;
      font-size: 14px;
      font-family: "Poppins";
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.24px;
      position: absolute;
      top: 172px;
      right: 20px;
      color: white
  }

</style>
<script setup lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonIcon } from '@ionic/vue';
  import { bookmarkOutline, bookmark } from 'ionicons/icons';
  import ChipBase from '@/components/ChipBase.vue';

  interface Props {
      title?: string;
      time?: number;
      ingredientTotal?: number;
      image?: string;
      saved?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
      image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      time: 0,
      ingredientTotal: 0,
      title: 'Receta de prueba'
  });
</script>