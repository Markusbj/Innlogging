<template>
    <div class="card">
        <h3 class="card-header text-center">Registrerings side</h3>
        <div class="card-body">
            <div id="creationForm">
            <validator name="validator">
            <form @submit="checkForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>Fornavn</label>
                    <input type="text" class="form-control" v-model.lazy="$v.formResponses.firstname.$model">
                        <p class="error" v-if="!$v.formResponses.firstname.required">Fornavn er krevet.</p>
                        <p class="error" v-if="!$v.formResponses.firstname.minLength">Fornavn må ha minst
                        {{$v.firstname.$params.minLength.min}} bokstaver.</p>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Etternavn</label>
                    <input type="text" class="form-control" v-model.lazy="$v.formResponses.lastname.$model">
                        <p class="error" v-if="!$v.formResponses.lastname.required">Etternavn er krevet.</p>
                        <p class="error" v-if="!$v.formResponses.lastname.minLength">Etternavn må ha minst
                        {{$v.lastname.$params.minLength.min}} bokstaver.</p>
                    </div>
                </div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model.trim="$v.email.$model">
                        <p class="error" v-if="!$v.formResponses.email.required">Email er krevet.</p>
                        <p class="error" v-if="!$v.formResponses.email.isUnique">Denne emailen er allerede registrert</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="fpass1">Passord</label>
                    <input id="fpass1" v-model="$v.formResponses.password.$model" type="password"/>
                    <p class="error" v-if="!$v.formResponses.password.required">Dette feltet må fylles ut</p>
                    <p class="error" v-if="!$v.formResponses.password.strongPassword">Sterkt passord må ha bokstaver, tall, tegn, og mer enn 8 lang.</p>
                </div>
                <div class="form-group">
                    <label for="fpass2">Bekreft passord</label>
                    <input id="fpass2" v-model="$v.formResponses.password2.$model" type="password"/>
                    <p class="error" v-if="!$v.formResponses.password2.required">Dette feltet må fylles ut</p>
                    <p class="error" v-if="!$v.formResponses.password2.sameAsPassword">Passordene matcher ikke.</p>
                </div>
                <section>
                    <button @click.prevent="submitForm" class="submit">Submit</button>
                <p v-if="errors" class="error">Skjemaet har errors</p>
                <p v-else-if="formTouched && uiState === 'submit clicked'" class="error">Skjemaet er tomt</p>
                <p v-else-if="uiState === 'form submitted'" class="success">Gjennomført</p>
                </section>
                </form>
            </validator>
            </div>
        </div>
    </div>
</template>

<script>

import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'FormValidation',
  data () {
    return {
      uiState: 'submit not clicked',
      errors: false,
      emty: true,

      formResponses: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  validations: {
    formResponses: {
      firstname: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(10)
      },
      lastname: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(12)
      },
      email: {
        required,
        email,
        isUnique (value) {
          if (value === '') return true

          // eslint-disable-next-line
        var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(",+"))@((\[[0-9]{1,3}\.[0-9{1,3}\.[0-9{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(email_regex.test(value))
            }, 350 + Math.random() * 300)
          })
        }
      },
      password: {
        required,
        strongPassword (password) {
          return (
            /[a-z]/.test(password) &&
                  /[0-9]/.test(password) &&
                  /\W|_/.test(password) &&
                  password.length >= 6
          )
        }
      },
      password2: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  submitForm () {
    this.formTouched = !this.$v.formResponses.$anyDirty
    this.errors = this.$v.formResponses.$anyError
    this.uiState = 'submit clicked'
    if (this.errors === false && this.formTouched === false) {
      this.uiState = 'form submitted'
    }
  }
}

</script>

<style scoped>
</style>
