<template>
  <button :type="type" :class="variant" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'default'
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  font-size: 1rem;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.25rem 0.75rem;

  &:hover {
    cursor: pointer;
  }
}

button:disabled {
  color: $text-color;
  background-color: $secondary-light-color;
  border: 1px solid $secondary-light-color;

  &:hover {
    cursor: default;
    color: $text-color;
    background-color: $secondary-light-color;
    border: 1px solid $secondary-light-color;
  }
}

.default {
  color: $primary-color;

  &:hover {
    color: $white-color;
    background-color: $primary-color;
  }
}

.primary {
  color: $white-color;
  background-color: $primary-color;
  border: 1px solid $primary-color;

  &:hover {
    color: $primary-color;
    background-color: $white-color;
  }
}

.secondary {
  color: $text-color;
  background-color: $secondary-light-color;
  border: 1px solid $secondary-light-color;

  &:hover {
    color: $primary-color;
    background-color: $white-color;
    border: 1px solid $primary-color;
  }
}

.light-secondary {
  color: $text-light-color;
  background-color: transparent;

  &:hover {
    color: $primary-color;
  }
}
</style>