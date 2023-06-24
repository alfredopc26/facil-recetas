<template>
    <ion-card class="card-chef pb-3">
        <img :src="image" alt="image recetero top" class="full-height-img">

        <ion-card-content class="px-1 pt-1">
            <p class="text-chef px-1">{{ username }}</p>
            <p class="text-sub-chef px-1">{{ recipes }} Recipes</p>
        </ion-card-content>
    </ion-card>
  </template>
  <style scoped>
    .card-chef{
        border-radius: 10px;
        width: 90px;
        flex-shrink: 0;
        opacity: 0.80000001192092896;
    }
    .full-height-img {
        height: 80%;
        object-fit: cover;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        }

    .text-chef{
        text-align: center;
        font-size: 12px;
        font-family: "Poppins";
        font-weight: 500;
        line-height: 16px;
        letter-spacing: -0.24px;
    }

    .text-sub-chef{
        text-align: center;
        font-size: 10px;
        font-family: "Poppins";
        line-height: 16px;
        letter-spacing: -0.24px;
    }

  </style>
  <script setup lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue';
    import ChipBase from '@/components/ChipBase.vue';

    interface Props {
        image: string,
        username: string,
        recipes: number,
    }

    const props = withDefaults(defineProps<Props>(), {
        image: "https://ionicframework.com/docs/img/demos/avatar.svg",
        username: 'non-user',
        recipes: 0
    });
  </script>