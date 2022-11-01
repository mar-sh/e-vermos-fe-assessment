import { BASE_STORE_API_URL } from '@/utils/constants'

export const SET_PRODUCT = 'SET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export function state() {
  return {
    product: {},
    loading: false,
  }
}

export const actions = {
  async fetchProduct({ commit }, id) {
    try {
      commit(START_LOADING)
      commit(REMOVE_PRODUCT)

      const response = await this.$axios.get(
        `${BASE_STORE_API_URL}/products/${id}`
      )

      console.log(response)

      commit(SET_PRODUCT, response.data)
      commit(STOP_LOADING)

      return response.data
    } catch (error) {
      return error
    }
  },
}

export const mutations = {
  [SET_PRODUCT](state, payload) {
    state.product = payload
  },
  [REMOVE_PRODUCT](state) {
    state.product = {}
  },
  [START_LOADING](state) {
    state.loading = true
  },
  [STOP_LOADING](state) {
    state.loading = false
  },
}
