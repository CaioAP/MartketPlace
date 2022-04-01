<template>
  <div class="checkout-page">
    <div class="container">
      <section class="checkout" aria-label="Formulário de dados do comprador">
        <form ref="form" class="checkout-form" @submit.prevent="submitCheckout">
          <div class="checkout-personal-data">
            <BaseInput v-model="checkout.name" label="Nome" required />
            <BaseInput 
              v-model="checkout.email" 
              label="E-mail" 
              placeholder="email@exemplo.com"
              required 
            />
            <BaseInput 
              v-model="checkout.cpf" 
              v-mask="'###.###.###-##'" 
              label="CPF"
              placeholder="___.___.___-__" 
              required 
            />
            <div class="field-grid-5-5">
              <BaseInput 
                v-model="checkout.birthday" 
                v-mask="'##/##/####'" 
                label="Data de Nascimento" 
                placeholder="__/__/____"
                required 
              />
              <BaseInput 
                v-model="checkout.phone" 
                v-mask="'(##) #####-####'" 
                label="Telefone" 
                placeholder="(__) _____-____" 
                required 
              />
            </div>
          </div>

          <div class="checkout-address-data">
            <div class="field-grid-6-4">
              <BaseInput 
                v-model="checkout.cep" 
                v-mask="'#####-###'" 
                label="CEP" 
                placeholder="_____-___" 
                required
                @input="searchForAddress" 
              />
              <BaseInput v-model="checkout.state" label="Estado" required />
            </div>
            <div class="field-grid-5-5">
              <BaseInput v-model="checkout.city" label="Cidade" required />
              <BaseInput v-model="checkout.district" label="Bairro" required />
            </div>
            <BaseInput v-model="checkout.street" label="Endereço" required />
            <div class="field-grid-6-4">
              <BaseInput v-model="checkout.complement" label="Complemento" />
              <BaseInput v-model="checkout.number" label="Número" required />
            </div>
          </div>

          <BaseButton class="btn-checkout" type="submit" variant="primary">
            Concluir compra
          </BaseButton>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'PageCheckout',
  directives: {
    mask,
  },
  layout: 'checkout',
  data() {
    return {
      checkout: {
        name: '',
        email: '',
        cpf: '',
        birthday: '',
        phone: '',
        cep: '',
        state: '',
        city: '',
        district: '',
        street: '',
        complement: '',
        number: '',
      }
    }
  },
  methods: {
    async searchForAddress(cep) {
      cep = cep.replace(/[^0-9]/g, '')

      if (cep.length === 8) {
        try {
          const url = `https://viacep.com.br/ws/${cep}/json/`

          const { data } = await this.$axios.get(url)

          this.checkout = {
            ...this.checkout,
            state: data.uf,
            city: data.localidade,
            district: data.bairro,
            street: data.logradouro,
          }
        } catch (error) {
          alert(error.message)
        }
      }
    },

    submitCheckout() {
      this.$store.commit('clearCartProducts')
      alert('Salvo!')
      this.$router.replace('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.checkout-page {
  margin-block: 4rem;

  .container {
    margin: auto;

    .checkout {
      width: 100%;
    
      .checkout-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        & > div {
          display: grid;
          gap: 1rem;
        }

        .btn-checkout {
          border-radius: 0.25rem;
          padding-block: 0.75rem;
          grid-column: 2;
        }

        @media only screen and (max-width: $screen-md) {
          grid-template-columns: 1fr;

          & > div:nth-of-type(2) {
            grid-row: 2;
          }

          .btn-checkout {
            grid-column: 1;
            grid-row: 3;
          }
        }
      }
    }
  }
}
</style>