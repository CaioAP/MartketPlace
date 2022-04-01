<template>
  <div class="input-field">
    <input 
      v-model="innerValue" 
      :type="type" 
      :placeholder="placeholder"
      @input="$emit('input', innerValue)"
    />

    <BaseButton :type="btnType" variant="primary">
      <IconSearch />
    </BaseButton>
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: {
    IconSearch,
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    btnType: {
      type: String,
      default: 'button'
    },
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
  display: flex;
  width: 100%;

  > input {
    width: 100%;
    min-height: 36px;
    padding-inline: 1rem;
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & ::v-deep button.primary {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>