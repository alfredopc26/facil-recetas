<template>
    <ion-card class="card-search-top pb-3 d-flex" :style="{ backgroundImage: 'linear-gradient(350.98deg, rgba(0, 0, 0, 0.5) 0.01%, transparent), url(' + image + ')', backgroundSize: 'cover'  }">
        <ion-card-content class="p-1 d-flex align-items-end">
            <p class="title-top-search">
                {{ title }}
            </p>
        </ion-card-content>
    </ion-card>
    
</template>
<style scoped>

.card-search-top{
      width: 100%;
      height: 100px;
      flex-shrink: 0;
  }      
.title-top-search{
    color: #FFF;
    font-size: 18px;
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.36px;
    
}
</style>
<script setup lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonIcon } from '@ionic/vue';
  import { bookmarkOutline, bookmark } from 'ionicons/icons';

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