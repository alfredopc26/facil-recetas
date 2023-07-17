import { IAuthState } from "./state";

export function setAuth0Client(state, _auth0Client) {
  state.auth0Client = _auth0Client;
}

export function updateLogOut(state) {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userLang");
  state.accessToken = null;
  state.userData = {};
  state.email = "";
  state.userType = "";
  state.nudgeSeen = "";
}

export function updateSetLoginToken(state, authToken) {
  state.accessToken = authToken;
  localStorage.setItem("accessToken", authToken);
}

export function updateUserData(state, userData) {
  state.userData = userData;
}

export function setUserData(state, userData) {
  state.userData = userData;
}
