<template>
    <ion-chip>
      <ion-avatar v-if="withAvatar">
        <img alt="Silhouette of a person's head" :src="avatar" />
      </ion-avatar>
      <ion-label v-if="withLabel">{{ label }}</ion-label>
    </ion-chip>
  </template>
  
  <script setup lang="ts">
    import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
    import { close, closeCircle, pin } from 'ionicons/icons';
  
    interface Props {
        withAvatar: boolean,
        avatar: string,
        withLabel: boolean,
        label: string
    }

    const props = withDefaults(defineProps<Props>(), {
        withAvatar: true,
        avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
        withLabel: true,
        label: 'Avatar Chip'
        });

  </script>