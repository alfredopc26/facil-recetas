<template>
    <ion-card class="card-live">
        <ion-card-header>
            <ChipBase class="chip-user"
                :avatar="avatar"
                :label="username"
            ></ChipBase>
        </ion-card-header>
        <ion-card-content>
            <div class="text-front-card">
            {{ description }}
            </div>
        </ion-card-content>
    </ion-card>
  </template>
  <style scoped>
  .chip-user{
    display: inline-flex;
    border-radius: 14.5px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(6px);
    max-width: 120px;
  }
  .text-front-card{
    display: flex;
    width: 219.184px;
    flex-direction: column;
    flex-shrink: 0;
    color: #FFF;
    font-size: 18px;
    font-family: "Poppins";
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
  .card-live{
    border-radius: 20px;
    width: 266px;
    height: 203px;
    flex-shrink: 0;
    border: 1px solid #e71111;
    opacity: 0.80000001192092896;
    background: linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 0.01%, #000000 99.99%), url('/images/bg-initial-375x812.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  </style>
  <script setup lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import ChipBase from '@/components/ChipBase.vue';

    interface Props {
        avatar: string,
        username: string,
        description: string,
    }

    const props = withDefaults(defineProps<Props>(), {
        avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
        username: 'non-user',
        description: "Here's a small text description for the card content. Nothing more, nothing less."
    });
  </script>