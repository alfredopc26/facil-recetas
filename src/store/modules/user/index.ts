import {
  Module
} from 'vuex';

import { authState, IAuthState } from "./state";
import { IRootState } from "../../index";
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export const store: Module<IAuthState, IRootState> = {
  namespaced: true,
  state: authState,
  mutations,
  actions,
  getters
}