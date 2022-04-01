<template>
  <div class="logo" :class="{ monocromatic }">
    <span class="logo-mkt">Mkt</span>
    <span class="logo-place">Place</span>
  </div>
</template>

<script>
export default {
  props: {
    monocromatic: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;

  > span {
    font-family: $font-bold;
    font-size: 2rem;
  }

  .logo-mkt,
  .logo-place {
    color: $text-color;
  }
  
  &:not(.monocromatic) .logo-mkt {
    color: $secondary-color;
  }

  &:not(.monocromatic) .logo-place {
    color: $primary-color;
  }
}
</style>