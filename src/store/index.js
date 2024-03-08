import { createStore, useStore as baseUseStore } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { MutationTypes, ActionTypes } from './constants'

export { MutationTypes, ActionTypes }

export const key = Symbol()
export const store = createStore({
  state,
  getters,
  mutations,
  actions,
})
