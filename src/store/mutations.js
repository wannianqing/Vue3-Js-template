import { MutationTypes } from './constants'

export const mutations = {
  [MutationTypes.SET_COUNT](state,payload){
    state.count = payload
  }
}