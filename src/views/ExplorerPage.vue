<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explorar</ion-title>
        </ion-toolbar>
        <SearchBarToolbar/>
      </ion-header>
      <ion-grid v-if="dataDummy.length > 0">
        <ion-row>
          <ion-col v-for="(reccette, index) of dataDummy" :key="index" size="6" size-md="4" size-lg="2">
            <CardPreviewRecette :reccette="reccette"/>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import SearchBarToolbar from '@/components/SearchBarToolbar.vue';
import CardPreviewRecette from '@/components/CardPreviewRecette.vue';
import { onMounted, ref } from 'vue';
import { IRecette } from '@/utils/types';

const Reccettes = ref([] as IRecette[])
const dataDummy:IRecette[] = [
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    },
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    },
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    },
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    },
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    },
    {
      title: "Sancocho",
      subtitle: "El sancocho es un plato tipico de colombia",
      description: "Preparado con costilla, pollo o cerdo...",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/NPCOUP725ZBQBCLN6TJ5RUSHHI.jpg"
    }
  ]

</script>