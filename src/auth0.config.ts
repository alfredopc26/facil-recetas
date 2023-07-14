import { isPlatform } from "@ionic/vue";

export const domain = "dev-owq7qt2p.us.auth0.com";
export const clientId = "rMJhczclF4Q6q7rqfIfvur1LIUOWZZZz";
export const audience = "https://dev-owq7qt2p.us.auth0.com/userinfo";
const appId = "com.auth0.facilRecetas";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri =  'http://localhost:8100/load-user';