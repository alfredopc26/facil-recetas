import axios from "../../../plugins/axios";
import { createAuth0Client, Auth0Client } from '@auth0/auth0-spa-js';
import { domain as auth0Domain, clientId, callbackUri, audience } from "../../../auth0.config";
import { Browser } from "@capacitor/browser";

const errorFunction = (error: any) => {
  if(error.response?.data?.statusCode){
    let errorData = error.response.data;
    if(errorData.statusCode == 404 || errorData.statusCode == 401){
      return errorData;
    } else {
      return {"statusCode": 500, "message": "Unexpected error"};
    }
  } else {
    return {"statusCode": 500, "message": "Unexpected server error"};
  }
}

export function logout({ commit, state, dispatch }: any) {
  dispatch('getAuthClient')
    .then((auth0Client: any) => {
      commit('updateLogOut');
      auth0Client.logout({
        returnTo: <string>(import.meta.env.VITE_URL_LOGOUT_RETURN)
      });
    })
}

export function getAuthClient({ commit, state }: any): Promise<Auth0Client> {
  return createAuth0Client({
    domain: auth0Domain,
    clientId: clientId,
    authorizationParams: {
      redirect_uri: callbackUri,
      audience: audience,
      scope: 'openid profile email offline_access'
    },

  }).then((auth0Client) => {
    commit('setAuth0Client', auth0Client);
    return auth0Client;
  });
}

export async function loginUser({ dispatch }: any, action) {

  action = (action == 'register') ? 'signup' : 'login';

  let redirect_uri = 'tabs/home';
  const url = await dispatch('getAuthClient').then((auth0Client) => {
    return auth0Client.buildAuthorizeUrl({
        scope: 'talent',
        screen_hint: action,
        redirect_uri
      })
  });

  window.location = url;
}

export async function loginGoogle({ dispatch }: any) {

  await dispatch('getAuthClient').then((auth0Client) => {
    return auth0Client.loginWithRedirect({
      openUrl: (url: string) =>
          Browser.open({
            url,
            windowName: "_self",
          }),
    })

  })
}

export function getCurrentUser({ commit, state }: any, force: boolean = false){
  if(!state.user || force){
    return axios.get(`user/get/`)
    .then(response => {
      if (response?.data) {
        commit('setUser', response.data);
        return response.data;
      } else {
        return {"statusCode": 500, "message": "Unexpected login error"};
      }
    })
  } else {
    return state.user;
  }
}