<template>
    <ion-card class="image-container position-relative">
      <img alt="Silhouette of mountains" :src="reccette?.imageUrl" />
      <span class="position-absolute top-0 end-0">
        <!-- Aquí puedes agregar el icono -->
        <ion-buttons slot="end" class="p-2">
          <ion-icon aria-hidden="true" :icon="bookmarkOutline" size="large" style="opacity: .8;"/>
        </ion-buttons>
      </span>
      <ion-card-header>
        <ion-card-title>{{ reccette?.title }}</ion-card-title>
        <ion-card-subtitle>{{ reccette?.subtitle }}</ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        {{ reccette?.description }}
      </ion-card-content>
    </ion-card>
  </template>
  
  <script lang="ts">
    import { IRecette } from '@/utils/types';
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { bookmarkOutline } from 'ionicons/icons';
    import { defineComponent, PropType } from 'vue';
    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
      setup() {
        return { bookmarkOutline };
      },
      props: {
        reccette: Object as PropType<IRecette>
      }
    });
  </script>