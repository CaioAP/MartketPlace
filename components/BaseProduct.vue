<template>
  <article class="product">
    <nuxt-img class="product-image" :src="imageUrl" />

    <div class="product-body">
      <span class="product-category">
        {{ category }}
      </span>
      <h3 class="product-name" :title="name">
        {{ name }}
      </h3>
      <p class="product-description" :title="description">
        {{ description }}
      </p>
      <p class="product-price">
        {{ $Utils.formatPrice(price) }}
      </p>
    </div>

    <BaseButton class="product-action" @click="addToCart">
      Adicionar ao carrinho
    </BaseButton>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('addProductToCart', { ...this.$props })
    }
  },
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 100%;
  box-shadow: $box-shadow;

  .product-image {
    display: flex;
    margin: 0 auto;
    max-width: 75%;
    background-color: $secondary-color;
  }

  .product-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

    .product-name,
    .product-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .product-category {
      font-family: $font-bold;
      font-size: 0.8rem;
      color: $primary-color;
    }

    .product-name {
      -webkit-line-clamp: 1;
      font-family: $font-bold;
      font-size: 1.1rem;
    }

    .product-description {
      -webkit-line-clamp: 4;
      max-height: 100px;
      font-size: 1rem;
      color: $text-light-color;
    }

    .product-price {
      font-family: $font-bold;
      font-size: 1.5rem;
    }
  }
  
  .product-action {
    width: 100%;
    padding-block: 1rem;
    font-family: $font-bold;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
</style>