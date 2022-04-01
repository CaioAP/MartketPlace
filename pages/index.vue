<template>
  <div class="products-page">
    <BaseHero />

    <div class="container">
      <section class="search" aria-labelledby="search-title">
        <h1 id="search-title">Encontre seu produto</h1>

        <form class="search-form" @submit.prevent="searchProducts">
          <BaseInputButton 
            v-model="searchText"
            placeholder="Pesquisar..."
            btn-type="submit"
          />
        </form>
      </section>

      <section class="products" aria-label="Lista de Produtos">
        <BaseProduct 
          v-for="product in productsFiltered" 
          :key="product.id" 
          v-bind="product"
        />
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      searchText: '',
      products: [],
      productsFiltered: []
    }
  },
  async fetch() {
    try {
      const url = 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json'

      const { data } = await this.$axios.get(url)
      this.products = data
    } catch (error) {
      alert(error.message)
    }
  },
  watch: {
    products(newValue) {
      this.productsFiltered = newValue
    }
  },
  methods: {
    searchProducts() {
      if (!this.searchText)
        return (this.productsFiltered = this.products)

      const searchText = this.searchText.normalize('NFD').replace(/[\u0300-\u036F]/g, "").toLowerCase()
      
      this.productsFiltered = this.products.filter(product => {
        const category = product.category.normalize('NFD').replace(/[\u0300-\u036F]/g, "").toLowerCase()
        const name = product.category.normalize('NFD').replace(/[\u0300-\u036F]/g, "").toLowerCase()

        if (category.toLowerCase().match(searchText)) return true
        if (name.toLowerCase().match(searchText)) return true
        return false
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.products-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .container {
    flex-direction: column;

    .search {
      display: flex;
      align-items: center;
      gap: 2rem;
      width: 100%;
      padding: 1rem 2rem;
      margin: 2rem 0;
      box-shadow: 0 0 12px 2px rgb(0, 0, 0, 0.1);

      @media only screen and (max-width: $screen-sm) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      #search-title {
        min-width: max-content;
        font-size: 1rem;
        color: $secondary-color;
      }

      .search-form {
        width: 100%;
      }
    }

    .products {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem 1rem;
  
      @media only screen and (max-width: $screen-md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: $screen-sm) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>