<template>

    <ion-page  id="main-content">
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/tabs/explore">
                <ion-icon aria-hidden="true" :icon="gridOutline" />
                <ion-label>Explorar</ion-label>
            </ion-tab-button>
    
            <ion-tab-button tab="tab2" href="/tabs/home">
                <ion-icon aria-hidden="true" :icon="homeOutline" />
                <ion-label>Home</ion-label>
            </ion-tab-button>
    
            <ion-tab-button tab="tab3" href="/tabs/add">
                <ion-icon aria-hidden="true" :icon="addCircleSharp" />
                <ion-label>Add Recette</ion-label>
            </ion-tab-button>
    
            <ion-tab-button tab="tab4" href="/tabs/comunidad">
                <ion-icon aria-hidden="true" :icon="peopleOutline" />
                <ion-label>Comunidad</ion-label>
            </ion-tab-button>
    
            <ion-tab-button tab="tab5" href="/tabs/profile">
                <ion-icon aria-hidden="true" :icon="personCircleOutline" />
                <ion-label>Perfíl</ion-label>
            </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonMenu, IonMenuButton, IonButtons } from '@ionic/vue';
  import { ellipse, square, triangle, gridOutline, homeOutline, addCircleSharp, moon, peopleOutline, personCircleOutline } from 'ionicons/icons';


  </script>
  