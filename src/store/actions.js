
import { ActionTypes, MutationTypes } from './constants'

export const actions = {
  async [ActionTypes.ASYNC_SET_COUNT]({ commit, state }) {
    // 异步操作
    commit(MutationTypes.SET_COUNT,1)
  },
}