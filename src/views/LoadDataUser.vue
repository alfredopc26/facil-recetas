<template>

</template>
  
  <script setup lang="ts">
    import { IonButton, loadingController } from '@ionic/vue';
    import { computed, onMounted  } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter, useRoute } from "vue-router";
    import axios from '../plugins/axios'

    const store = useStore();
    const router = useRouter();

    onMounted(async function () {
      await store.dispatch('auth/getAuthClient');
      const auth0Client = computed(() => store.state.auth.auth0Client);
      await auth0Client.value.handleRedirectCallback()
        .then(async () => {
          return await auth0Client.value.isAuthenticated();
        })
        .then(async isAuthenticated => {
          if(isAuthenticated) {
            return auth0Client.value.getUser()
            .then(async user_data => {
              await axios.post((import.meta.env.VITE_SERVICE_URL as string)+'/users/post-user-registered', { user_id: user_data.sub, email: user_data.email })
              .then( () => {
                router.push({path: '/' })
              })
              .catch( err => {
                  console.error(err)
                })
            })
          }
        })
        .catch(err => console.error(err));
    });

  </script>