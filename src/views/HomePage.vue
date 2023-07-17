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
                <p class="text-dashboard title"><strong>Hola {{ user.name }},</strong></p>
                <p class="text-dashboard subtitle">Que quieres cocinar hoy ?</p>
            </ion-text>
        </div>
        <div class="d-flex justify-content-end">
          <AvatarProfile :image="user.photo"></AvatarProfile>
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
      <CategoryScrollingX :data-category="dataCategory"></CategoryScrollingX>

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

      <div class="content-scrolling">
        <LiveCard
        v-for="livecard of livecards"
        :key="livecard"
        :avatar="livecard.image"
        :username="livecard.username"
        :description="livecard.title"
        ></LiveCard>
      </div>

      <div class="living-cooking mt-3 d-flex ">
        <div class="ps-4">
          <div>
            <ion-text color="dark" >
              <p class="text-dashboard title"><strong>Top Receteros</strong></p>
            </ion-text>
          </div>
        </div>            
        <div class="pe-4">
          <p class="title text-decoration-underline">Ver todos</p>
        </div>
      </div>

      <div class="content-scrolling">
        <ChefCard
        v-for="chefcard of chefcards"
        :key="chefcard"
        :image="chefcard.image"
        :username="chefcard.username"
        :description="chefcard.numberRecipes"
        ></ChefCard>
      </div>

      <div class="living-cooking mt-3 d-flex ">
        <div class="ps-4">
          <div>
            <ion-text color="dark" >
              <p class="text-dashboard title"><strong>Recetas populares</strong></p>
            </ion-text>
          </div>
        </div>            
        <div class="pe-4">
          <p class="title text-decoration-underline">Ver todas</p>
        </div>
      </div>

      <div class="content-top-recipe pb-5">
        <CardTopRecipes
        v-for="recipes of recipesCards"
        :key="recipes"
        :image="recipes.image"
        :title="recipes.title"
        :time="recipes.time"
        :saved="recipes.saved"
        :ingredientTotal="recipes.ingredientTotal"
        ></CardTopRecipes>
      </div>

    </ion-content>
  </ion-page>
</template>
<style scoped>
  ion-searchbar.custom {
    --border-radius: 8px;
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
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow-x:scroll;
}
.content-top-recipe{
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.scrolling-items{
  min-width: 120px;
  margin-right: 10px;
  flex-grow: 1;
}
.living-cooking{
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
<script setup lang="ts">
  import { computed, onMounted, watch, watchEffect  } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import { optionsOutline, close, closeCircle, appsOutline,radioOutline } from 'ionicons/icons';
  import { IRecette, ICategory, ILiveItems, IChefItems, IRecipesCard, IUser } from '@/utils/types';

  import { useStore } from 'vuex';

  const store = useStore();

  const user = ref({} as IUser);

  watchEffect(() => {
    if(store.state.auth?.user){
      user.value = store.state.auth?.user;
    }
  });

  onMounted(async function () {

  })

  import AvatarProfile from '@/components/AvatarProfile.vue';
  import ChipBase from '@/components/ChipBase.vue';
  import LiveCard from '@/components/LiveCard.vue';
  import ChefCard from '@/components/ChefCard.vue';
  import CardTopRecipes from '@/components/CardTopRecipes.vue';
  import CategoryScrollingX from '@/components/CategoryScrollingX.vue';

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

  const livecards:ILiveItems[] = [
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      title: 'Rico sanchocho en vivo 🥗🍲'
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      title: 'Rico sanchocho en vivo 🥗🍲'
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      title: 'Rico sanchocho en vivo 🥗🍲'
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      title: 'Rico sanchocho en vivo 🥗🍲'
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
  const chefcards:IChefItems[] = [
    {
      username: 'alfredopc26',
      image: 'images/alfre.jpg',
      numberRecipes: 80
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      numberRecipes: 50
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      numberRecipes: 50
    },
    {
      username: 'alfredopc26',
      image: 'images/logo-kp.png',
      numberRecipes: 50
    }
  ]
  const recipesCards:IRecipesCard[] = [
    {
      title: 'Sancocho de costilla',
      image: 'images/sancocho-costilla.jpg',
      ingredientTotal: 80,
      time: 12
    },
    {
      title: 'Arroz trifásico',
      image: 'images/alfre.jpg',
      ingredientTotal: 80,
      time: 12,
      saved: true
    },
    {
      title: 'Costillas BBQ',
      image: 'images/alfre.jpg',
      ingredientTotal: 80,
      time: 12
    },
    {
      title: 'Carne Guisada',
      image: 'images/alfre.jpg',
      ingredientTotal: 80,
      time: 12
    },
    {
      title: 'Arepa de huevo',
      image: 'images/alfre.jpg',
      ingredientTotal: 80,
      time: 12
    }
  ]
  </script>