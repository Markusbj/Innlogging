<template>
        <v-form class="center">
          <div>
            <v-alert 
              color="error"
              :value="error"
              icon="close">
            </v-alert>
            <v-card-text>
              <label >Login</label>
              <v-text-field v-model="username" prepend-icon="person" name="login"  type="text"></v-text-field>
              <label>Passord</label>
              <v-text-field v-model="password" prepend-icon="lock" name="password" type="password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/registrer" rounded color="indigo" dark>Registrer deg</v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="primary" dark @click.prevent="login() ">Logg inn<v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
            </div>
        </v-form>
</template>

<script>
export default {
  name: 'logg-inn',
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    login () {
      console.log(this.$store)
      this.$store.dispatch('LOGIN', {
        _username: this.username,
        _password: this.password
      })
      .then(success => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center{
position: absolute;
left:0;
top: 50%;
width:100%;
text-align: center;
font-size: 18px;
}

</style>
