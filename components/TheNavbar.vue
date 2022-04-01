<template>
  <div id="navbar" :class="navbarClass">
    <div class="container">
      <nuxt-link class="no-underline" to="/">
        <BaseLogo />
      </nuxt-link>

      <nav>
        <ul>
          <li class="nav-produtos">
            <nuxt-link class="no-underline" to="/">
              Produtos
            </nuxt-link>
          </li>
          <li class="nav-cart">
            <nuxt-link to="/cart">
              <IconCart />
              <span class="nav-cart-count">{{ cartCount }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconCart from '@/components/icons/IconCart.vue';

export default {
  components: {
    IconCart,
  },
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    shadow: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    navbarClass() {
      return this.shadow ? `${this.size} shadow` : this.size
    },

    ...mapGetters(['cartCount'])
  },
}
</script>

<style lang="scss" scoped>
#navbar {
  display: flex;
  justify-content: center;

  &.large {
    min-height: 100px;
  }

  &.shadow {
    box-shadow: $box-shadow;
  }

  .container {
    justify-content: space-between;
    align-items: center;
    
    ul {
      display: flex;
      gap: 1rem;
      list-style: none;
      list-style-type: none;

      li {
        font-family: $font-bold;
        color: $secondary-color;
      }

      .nav-produtos > a {
        color: $secondary-color;

        &:hover {
        color: $primary-color;
        }
      }

      .nav-cart {
        color: $primary-color;
        position: relative;

        .nav-cart-count {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          right: -70%;
          width: 1rem;
          height: 1rem;
          font-family: $font-regular;
          font-size: 0.7rem;
          line-height: 1;
          border-radius: 50%;
          background-color: $danger-color;
          color: $white-color;
        }
      }
    }
  }
}
</style>