<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
      <ion-toolbar>
        <ion-segment @ionChange="segmentChanged" :value="selectedSegment">
          <ion-segment-button value="recipe">
            <ion-label>Recetas</ion-label>
          </ion-segment-button>
          <ion-segment-button value="chef">
            <ion-label>Receteros</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
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
    <div v-if="selectedSegment == 'recipe'">
      <CategoryScrollingX :data-category="dataCategory"></CategoryScrollingX>
      <div class="living-cooking mt-3 d-flex ">
        <div class="ps-4">
          <div>
            <ion-text color="dark" >
                <p class="text-top-search"><strong>Top busquedas de la semana</strong></p>
            </ion-text>
          </div>
        </div>            
        <div class="pe-4">
        </div>
      </div>
      <div class="content-post-recipe pb-5 pt-1 px-3">
        <ion-grid >
          <ion-row>
              <ion-col v-for="recipes of recipesCards" :key="recipes + 'id'" size="6" size-md="4" size-lg="2">
                <CardTopSearch
                  :image="recipes.image"
                  :title="recipes.title"
                  :time="recipes.time"
                  :saved="recipes.saved"
                  :ingredientTotal="recipes.ingredientTotal"
                ></CardTopSearch>
              </ion-col>
          </ion-row>
      </ion-grid>
      </div>
    </div>
    <div v-if="selectedSegment == 'chef'">
      <CategoryScrollingX :data-category="dataCategory"></CategoryScrollingX>
      <div class="living-cooking mt-3 d-flex ">
        <div class="ps-4">
          <div>
            <ion-text color="dark" >
                <p class="text-top-search"><strong>Top receteros de la semana</strong></p>
            </ion-text>
          </div>
        </div> 
      </div>
      <div class="content-post-recipe pb-5 pt-1 px-3">
        <ion-grid >
          <ion-row>
              <ion-col v-for="chefcard of chefcards" :key="chefcard + 'id'" size="4" size-md="2" size-lg="1">
                <ChefCard
                :image="chefcard.image"
                :username="chefcard.username"
                :description="chefcard.numberRecipes"
                ></ChefCard>
              </ion-col>
          </ion-row>
      </ion-grid>
      </div>
    </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>

.content-post-recipe{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.living-cooking{
  flex-wrap: nowrap;
  justify-content: space-between;
}
.text-top-search{
  font-size: 22px;
}
</style>
<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonCol, IonGrid, IonRow  } from '@ionic/vue';
  import { optionsOutline} from 'ionicons/icons';
  import { IChefItems, IRecipesCard, ICategory } from '@/utils/types';
  import { ref } from "vue";

  import CardTopSearch from '@/components/CardTopSearch.vue';
  import CategoryScrollingX from '@/components/CategoryScrollingX.vue';
  import ChefCard from '@/components/ChefCard.vue';

  const myIonSegment = ref();
  const selectedSegment = ref("recipe");

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

  const segmentChanged = (e: CustomEvent) => {
        selectedSegment.value = e.detail.value;
    };
</script>