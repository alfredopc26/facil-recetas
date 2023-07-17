import { isPlatform } from "@ionic/vue";

export const domain = <string>(import.meta.env.VITE_AUTH0_DOMAIN);
export const clientId = <string>(import.meta.env.VITE_AUTH0_CLIENT_ID);
export const audience = <string>(import.meta.env.VITE_AUTH0_AUDIENCE);
const appId = <string>(import.meta.env.VITE_AUTH0_APP_ID);

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri =  <string>(import.meta.env.VITE_AUTH0_URL_CALL_BACK);