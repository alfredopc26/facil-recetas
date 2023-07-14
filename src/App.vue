<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted } from 'vue';
import axios from './plugins/axios';
import { useStore } from 'vuex';
import { Auth0Client } from '@auth0/auth0-spa-js';

const store = useStore();

onMounted(async () => {
  const excludeRoute = [
      '/login',
      '/load-user'
    ]
    if (!excludeRoute.includes(location.pathname)) {
      axios.interceptors.request.use(
        async (config) => {
          if (!config.headers?.ignoreToken) {
            const token = await store.dispatch('auth/getAuthClient').then(client => client.getTokenSilently());
            if (token !== null) {
              config.headers.Authorization = `Bearer ${token}`;
              store.commit('auth/updateSetLoginToken', token);
            }
          } else {
            const headers = config.headers || {};
            delete headers.ignoreToken;
            config.headers = headers;
          }
          return config;
        },
        (err) => Promise.reject(err)
      );


      await store.dispatch('auth/getAuthClient')
      .then<Auth0Client>(async (auth0Client) => {
          const validate_user = await auth0Client.isAuthenticated();
          console.log('auth0Client', await auth0Client.isAuthenticated());
          
          if (validate_user) {
            return await auth0Client.getUser();
          }
          throw new Error("User is not autenticated");
        })
        .then(async user_data => {
          console.log('user_data', user_data);          
          return user_data
        })
        .catch(err => {
          console.error(err);
          location.replace('/login');
        })
    }
})
</script>
