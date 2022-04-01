<template>
  <div id="app">
    <TheNavbar size="large" :shadow="true"/>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'LayoutCheckout'
}
</script>