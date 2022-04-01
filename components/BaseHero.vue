<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container">
      <h2 id="hero-title">Notebooks</h2>
      <p class="hero-description">As melhores ofertas</p>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(circle at 100%, $primary-light-color, $primary-color 70%);
  
  @media only screen and (max-width: $screen-md) {
    min-height: 200px;
  }

  @media only screen and (max-width: $screen-sm) {
    min-height: 150px;
  }

  .container {
    display: block;
    text-align: right;

    #hero-title {
      font-family: $font-black;
      font-size: 3rem;
      color: $white-color;
    }

    .hero-description {
      font-family: $font-bold;
      font-size: 1.5rem;
      color: $white-color;
    }
  }
}
</style>