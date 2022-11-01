import { BASE_STORE_API_URL } from '@/utils/constants'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export function state() {
  return {
    products: [{ id: 1, name: 'a' }],
    loading: false,
  }
}

export const actions = {
  async fetchProducts({ commit }) {
    try {
      commit(START_LOADING)
      commit(REMOVE_PRODUCTS)

      const response = await this.$axios.get(`${BASE_STORE_API_URL}/products`)

      commit(SET_PRODUCTS, response.data)
      commit(STOP_LOADING)

      return response.data
    } catch (error) {
      return error
    }
  },
}

export const mutations = {
  [SET_PRODUCTS](state, payload) {
    state.products = payload
  },
  [REMOVE_PRODUCTS](state) {
    state.products = []
  },
  [START_LOADING](state) {
    state.loading = true
  },
  [STOP_LOADING](state) {
    state.loading = false
  },
}
