<template>
    <div class="card">
        <h3 class="card-header text-center">Registrerings side</h3>
        <div class="card-body">
            <v-form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>Fornavn</label>
                    <input type="text" class="form-control" v-model.trim="$v.firstname.$model" :class="{
                    'is-invalid!' :$v.firstname.$error, 'is-valid' :!$v.firstname.$invalid }">
                    <div class="valid-feedback">Fornavnet ditt er godkjent!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.firstname.required">Fornavn er krevet.</span>
                        <span v-if="!$v.firstname.minLength">Fornavn må ha minst
                        {{$v.firstname.$params.minLength.min}} bokstaver.</span>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Etternavn</label>
                    <input type="text" class="form-control" v-model.trim="$v.lastname.$model" :class="{
                    'is-invalid!' :$v.lastname.$error, 'is-valid' :!$v.lastname.$invalid }">
                    <div class="valid-feedback">Etternavnet ditt er godkjent!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.lastname.required">Etternavn er krevet.</span>
                        <span v-if="!$v.lastname.minLength">Etternavn må ha minst
                        {{$v.lastname.$params.minLength.min}} bokstaver.</span>
                    </div>
                </div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model.trim="$v.email.$model" :class="{
                        'is-invalid!' :$v.email.$error, 'is-valid' :!$v.email.$invalid }">
                    <div class="valid-feedback">Emailen din er godkjent!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.email.required">Email er krevet.</span>
                        <span v-if="!$v.email.isUnique">Denne emailen er allerede registrert</span>
                    </div>
                </div>
                    <input type="submit" value="Submit">
                </v-form>
        </div>
    </div>
</template>

<script>

import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'FormValidation',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: ''
    }
  },
  validations: {
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
    }
  }
}
</script>

<style scoped>
</style>
