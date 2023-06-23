<template>
    <ion-avatar>
      <img alt="Silhouette of a person's head" :src="image" />
    </ion-avatar>
</template>
  
  <script setup lang="ts">
    import { IonAvatar } from '@ionic/vue';  

    interface Props {
        image: string
    }

    const props = withDefaults(defineProps<Props>(), {
        image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
        });
    </script>