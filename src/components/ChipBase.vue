<template>
    <ion-chip>
      <ion-avatar v-if="withAvatar && !icon" :class="classAvatar">
        <img alt="Silhouette of a person's head" :src="avatar" width="80"/>
      </ion-avatar>
      <ion-icon :icon="bookmarkOutline" color="primary" v-if="icon" :class="classIcon"></ion-icon>
      <ion-label v-if="label">{{ label }}</ion-label>
    </ion-chip>
  </template>
  
  <script setup lang="ts">
    import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
    import { close, closeCircle, pin, bookmarkOutline } from 'ionicons/icons';
  
    interface Props {
        withAvatar: boolean,
        avatar: string,
        withLabel: boolean,
        label?: string,
        classAvatar: string,
        classIcon?: string,
        icon?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        withAvatar: true,
        avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
        withLabel: true,
        classAvatar: ''
        });

  </script>