<template>
  <div class="input-field">
    <label>{{ label }}</label><span v-if="required">*</span>
    <input 
      v-model="innerValue" 
      v-bind="$attrs"
      :type="type"
      :required="required"
      @input="$emit('input', innerValue)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerValue: ''
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
  },
}
</script>

<style lang="scss" scoped>
.input-field {
  width: 100%;

  > input {
    width: 100%;
    min-height: 36px;
    margin-top: 0.5rem;
    padding-inline: 1rem;
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 4px;

    &:focus {
      outline-color: $primary-color;
    }
  }
}
</style>