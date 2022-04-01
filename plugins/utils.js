export default ((context, inject) => {
  const utils = {
    formatPrice: (price) => {
      if (!price || !parseFloat(price)) price = 0

      return parseFloat(price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    }
  }

  inject('Utils', { ...utils })
})