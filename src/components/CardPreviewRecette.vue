<template>
    <ion-card>
      <img :alt="reccette?.title" :src="reccette?.imageUrl" />
      <ion-card-header>
        <ion-card-title style="font-size: 20px;">{{ reccette?.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{ reccette?.description }}
      </ion-card-content>
    </ion-card>
  </template>
  
  <script lang="ts">
    import { IRecette } from '@/utils/types';
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineComponent, PropType } from 'vue';
  
    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
      props: {
        reccette: Object as PropType<IRecette>
      }
    });
  </script>