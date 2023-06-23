<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- Contenido de la columna -->
          <div class="image-container position-relative">
            <span class="position-absolute top-0 end-0">
              <!-- Aquí puedes agregar el icono -->
              <ion-buttons slot="end">
                <ion-icon aria-hidden="true" :icon="addCircleSharp" />
              </ion-buttons>
            </span>
          </div>
        </div>
        <!-- Otro contenido de la columna o filas adicionales -->
      </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { addCircleSharp } from 'ionicons/icons';
</script>
