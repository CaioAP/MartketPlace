<template>
  <div class="input-field">
    <BaseButton @click="decrement">
      -
    </BaseButton>

    <input 
      v-model="innerValue" 
      type="number" 
      @input="$emit('input', innerValue)"
    />

    <BaseButton @click="increment">
      +
    </BaseButton>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    minValue: {
      type: Number,
      default: 1
    },
    maxValue: {
      type: Number,
      default: 99999999
    }
  },
  data() {
    return {
      innerValue: 0
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
  },
  created () {
    this.innerValue = this.value;
  },
  methods: {
    decrement() {
      if (this.innerValue > this.minValue) 
        this.$emit('input', this.innerValue - 1)
    },

    increment() {
      if (this.innerValue < this.maxValue) 
        this.$emit('input', this.innerValue + 1)
    }
  },
}
</script>

<style lang="scss" scoped>
.input-field {
  display: flex;
  width: 100%;

  > input {
    width: 50px;
    min-height: 36px;
    padding-inline: 1rem;
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-inline: none;
    text-align: center;

    &:focus {
      outline-color: $primary-color;
    }
  }

  & ::v-deep button {
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
}
</style>