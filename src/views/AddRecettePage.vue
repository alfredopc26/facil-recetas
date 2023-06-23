<template>
    <ion-page class="mt-5">
      <ion-content>
        <FormPostRecette></FormPostRecette>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import FormPostRecette from '@/components/FormPostRecette.vue';
  import { onMounted, ref } from 'vue';
  import { IRecette } from '@/utils/types';
  
  const Reccettes = ref([] as IRecette[])
  </script>