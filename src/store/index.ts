import { createStore } from 'vuex';
import { store as auth } from './modules/auth/index';
import { IAuthState } from './modules/auth/state';

export interface IRootState {
  auth?: IAuthState;
  layout: string;
}

export const store = createStore({
  state: {
    layout: 'BaseLayout'
  },
  mutations: {
    setLayout (state, newLayout) {
      if(state.layout != newLayout){
        state.layout = newLayout;
      }
    }
  },
  modules: {
    auth
  }
})