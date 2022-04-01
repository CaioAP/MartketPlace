export const state = () => ({
  cartProducts: []
})

export const getters = {
  cartProducts: (state) => state.cartProducts,
  cartCount: (state) => state.cartProducts.length,
  cartTotalPrice: (state) => state.cartProducts.reduce(
    (total, product) => (total += product.price * product.quantity), 
    0
  )
}

export const mutations = {
  setCartProducts(state, products) {
    state.cartProducts = products
    this.$storage.setLocalStorage('cartProducts', state.cartProducts)
  },

  clearCartProducts(state) {
    state.cartProducts = []
    this.$storage.removeLocalStorage('cartProducts')
  },

  addProductToCart(state, product) {
    const productInCartIndex = state.cartProducts.findIndex(cartProduct => cartProduct.id === product.id)

    if (productInCartIndex >= 0) {
      state.cartProducts[productInCartIndex].quantity += 1
      this.$storage.setLocalStorage('cartProducts', state.cartProducts)
      return
    }

    product.quantity = 1
    product.totalPrice = product.price

    state.cartProducts.push(product)
    this.$storage.setLocalStorage('cartProducts', state.cartProducts)
  },

  editProductQuantityFromCart(state, { productId, quantity }) {
    const productInCartIndex = state.cartProducts.findIndex(product => product.id === productId)

    state.cartProducts[productInCartIndex].quantity = quantity
    this.$storage.setLocalStorage('cartProducts', state.cartProducts)
  },

  incrementProductFromCart(state, productId) {
    state.cartProducts = state.cartProducts.map(product => {
      if (product.id === productId) product.quantity += 1
      product.totalPrice = product.price * product.quantity

      return product
    })
  },

  removeProductFromCart(state, productId) {
    const cartProductsFiltered = state.cartProducts.filter(product => product.id !== productId)

    state.cartProducts = cartProductsFiltered
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    const cartProducts = this.$storage.getLocalStorage('cartProducts')

    if (cartProducts) commit('setCartProducts', cartProducts)
  }
}