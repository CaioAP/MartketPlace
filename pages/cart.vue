<template>
  <div class="cart-page">
    <div class="container">
      <section class="cart-products" aria-label="Produtos no carrinho">
        <div class="products-headers">
          <p></p>
          <p>Produto</p>
          <p>Quantidade</p>
          <p>Valor Unitário</p>
          <p>Total</p>
        </div>

        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product"
        >
          <div class="product-actions">
            <BaseButton 
              class="btn-remove-product" 
              variant="light-secondary" 
              @click="() => removeProductFromCart(product.id)"
            >
              <IconTrash />
            </BaseButton>
          </div>

          <div class="product-name">
            <span>{{ product.category }}</span>
            <p>{{ product.name }}</p>
          </div>

          <div class="product-quantity">
            <BaseInputNumber 
              :value="product.quantity" 
              @input="(value) => editProductQuantity(product.id, value)"
            />
          </div>

          <div class="product-price">
            <p>
              <span>{{ $Utils.formatPrice(product.price) }}</span>
              à vista ou 10x de
              {{ $Utils.formatPrice(product.price / 10) }}
            </p>
          </div>

          <div class="product-total-price">
            <p>
              <span>{{ $Utils.formatPrice(product.totalPrice * product.quantity) }}</span>
              à vista ou 10x de
              {{ $Utils.formatPrice(product.totalPrice / 10) }}
            </p>
          </div>
        </div>
      </section>

      <section v-if="totalPrice" class="cart-prices" aria-label="Valor do carrinho">
        <div class="total-price">
          <p>Total à vista</p>
          <p>{{ $Utils.formatPrice(totalPrice) }}</p>
        </div>
        <div class="total-price-divided">
          <p>Total parcelado</p>
          <p>
            em até 
            <span>10x de {{ $Utils.formatPrice(totalPrice) }}</span>
            (Total {{ $Utils.formatPrice(totalPrice) }})
          </p>
        </div>
      </section>

      <section class="cart-actions" aria-label="Ações do carrinho">
        <BaseButton class="btn-clear-cart" variant="light-secondary" @click="clearCart">
          <IconTrash />
          Limpar carrinho
        </BaseButton>

        <BaseButton class="btn-keep-shopping" variant="secondary" @click="goToProducts">
          Continuar comprando
        </BaseButton>

        <BaseButton class="btn-finish-buying" variant="primary" :disabled="!totalPrice" @click="goToCheckout">
          Concluir compra
        </BaseButton>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
  name: 'PageCart',
  components: {
    IconTrash,
  },
  layout: 'checkout',
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      totalPrice: 'cartTotalPrice'
    })
  },
  methods: {
    removeProductFromCart(productId) {
      this.$store.commit('removeProductFromCart', productId)
    },

    editProductQuantity(productId, quantity) {
      this.$store.commit('editProductQuantityFromCart', {
        productId,
        quantity
      })
    },

    clearCart() {
      this.$store.commit('clearCartProducts')
    },

    goToProducts() {
      this.$router.push('/')
    },

    goToCheckout() {
      this.$router.push('/checkout')
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 4rem;

  .container {
    flex-direction: column;

    .cart-products {
      width: 100%;
      overflow-x: auto;

      & > div {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr repeat(4, 6fr);
        column-gap: 2rem;
      }

      .products-headers {
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);

        p {
          font-family: $font-bold;
          text-transform: uppercase;
          padding-block: 1rem;
        }
      }

      .product {
        padding-block: 1rem;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);

        & > * {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .btn-remove-product {
          padding: 0;
        }

        .product-name {
          & > * {
            font-family: $font-bold;
          }

          span {
            color: $primary-color;
          }

          p {
            font-size: 1.2rem;
          }
        }

        .product-price,
        .product-total-price {
          span {
            font-family: $font-bold;
            font-size: 1.2rem;
          }
        }
      }
    }

    .cart-prices {
      width: 100%;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      & > div {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr repeat(4, 6fr);
        column-gap: 2rem;
      }

      & > div:first-of-type {
        padding-top: 2rem;
        padding-bottom: 1rem;
      }

      & > div:last-of-type {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }

      .total-price,
      .total-price-divided {
        p:first-of-type {
          display: grid;
          align-items: center;
          width: 100%;
          grid-column: 1 / span 4;
          text-align: right;
          font-family: $font-bold;
          font-size: 1.2rem;
          text-transform: uppercase;
        }
      }

      .total-price {
        p:last-of-type {
          font-family: $font-bold;
          font-size: 1.5rem;
          color: $primary-color;
        }
      }

      .total-price-divided {
        p:last-of-type > span {
          font-family: $font-bold;
        }
      }
    }

    .cart-actions {
      display: flex;
      gap: 1rem;
      padding-block: 2rem;

      button {
        padding-block: 0.75rem;
        font-family: $font-bold;
      }

      .btn-keep-shopping,
      .btn-finish-buying {
        width: 220px;
        border-radius: 0.25rem;
      }

      .btn-keep-shopping {
        margin-left: auto;
      }

      @media only screen and (max-width: 680px) {
        display: grid;

        .btn-keep-shopping,
        .btn-finish-buying {
          width: 100%;
        }
      }
    }
  }
}
</style>