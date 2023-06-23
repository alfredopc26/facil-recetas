<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Feed</ion-title>
        </ion-toolbar>
      </ion-header>        
      <div class="content-text-dashboard d-flex">
        <div class="w-100">
          <ion-text color="dark" >
                <p class="text-dashboard title"><strong>Hola Alfre,</strong></p>
                <p class="text-dashboard subtitle">Que quieres cocinar hoy ?</p>
            </ion-text>
        </div>
        <div class="d-flex justify-content-end">
          <AvatarProfile image="images/logo-kp.png"></AvatarProfile>
        </div>
      </div>
      <div class="search-content mt-4 d-flex">
        <div class="search-bar px-2">
          <ion-searchbar showCancelButton="focus" class="custom"></ion-searchbar>
        </div>
        <div class="search-filter pt-2 pe-3">
          <ion-button>
            <ion-icon :icon="optionsOutline"></ion-icon>
          </ion-button>
        </div>
      </div>
      <div class="content-scrolling">
        <ChipBase class="scrolling-items" v-for="category of dataCategory" :key="category"
        :avatar="category.image"
        :label="category.title"
        ></ChipBase>
      </div>



        <div class="living-cooking mt-5 d-flex ">
          <div class="ps-4">
            <div>
              <ion-text color="dark" >
                  <p class="text-dashboard title"><strong>Cocina en vivo</strong></p>
              </ion-text>
            </div>
            <div>
              <ChipBase 
              :avatar="'images/live.png'"
              :label="'Live'"
              ></ChipBase>
            </div>
          </div>            
          <div class="pe-4">
            <ion-button color="medium">
              <ion-icon :icon="appsOutline"></ion-icon>
            </ion-button>
          </div>
        </div>


        <div class="list-live-items">
          <ion-card class="card-live">
            <ion-card-header>
              <ion-chip class="chip-user w-50">
                <ion-avatar>
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>alfredopc</ion-label>
              </ion-chip>
            </ion-card-header>
            <ion-card-content>
              <div class="text-front-card">
                Here's a small text description for the card content. Nothing more, nothing less.
              </div>

            </ion-card-content>
          </ion-card>
        </div>

    </ion-content>
  </ion-page>
</template>
<style scoped>
  ion-searchbar.custom {
    --border-radius: 8px;
  }

  .text-front-card{
    display: flex;
    width: 219.184px;
    flex-direction: column;
    flex-shrink: 0;
    color: #FFF;
    font-size: 18px;
    font-family: "Poppins";
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.36px;
  }

  .card-live{
    border-radius: 10px;
    width: 266px;
    height: 203px;
    flex-shrink: 0;
    border: 1px solid #000;
    opacity: 0.80000001192092896;
    background: linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 0.01%, #000000 99.99%), url('/images/bg-initial-375x812.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .chip-user{
    display: inline-flex;
    gap: 10px;
    border-radius: 14.5px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(6px);
  }
.content-text-dashboard{
  margin-top: 2rem;
  padding-left: 20px;
  padding-right: 20px;
}
.text-dashboard{
  margin-bottom: 0rem; 
  font-family: "Poppins";
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}
.text-dashboard.title{
  font-size: 20px;
}
.text-dashboard.subtitle{
  font-size: 11px;
  color: #A9A9A9;
}
.content-scrolling{
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow-x:scroll
}
.scrolling-items{
  min-width: 100px;
  margin-right: 10px;
  flex-grow: 1;
}
.living-cooking{
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import CardPostRecette from '@/components/CardPostRecette.vue';
  import { optionsOutline, close, closeCircle, appsOutline,radioOutline } from 'ionicons/icons';
  import { IRecette, ICategory } from '@/utils/types';

  import AvatarProfile from '@/components/AvatarProfile.vue';
  import ChipBase from '@/components/ChipBase.vue';

  import { ref } from 'vue';
  
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

  const dataCategory:ICategory[] = [
    {
      title: 'Sancochos',
      image: '/images/soup.png'
    },
    {
      title: 'Arroces',
      image: '/images/soup.png'
    },
    {
      title: 'Desayunos',
      image: '/images/soup.png'
    },
    {
      title: 'Pastas',
      image: '/images/soup.png'
    },
    {
      title: 'Guisados',
      image: '/images/soup.png'
    },
    {
      title: 'Cenas',
      image: '/images/soup.png'
    }
  ]
  </script>