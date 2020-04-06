<template>
<div id="HkXuw_Qw8">
    <mdc-select class="HkQt17q4wI" label="Meny" value="stedstjeneste">
    <option class="SJ4Yym9VDU" value="a"><router-link to="/LoggInn">Logg inn</router-link></option>
  
    <option class="B1rYJm9EvU" value="b"><router-link to="/Registrer">Registrer deg</router-link></option>
  
    <option class="r1LtJQcNvU" value="c"><router-link to="/OmOss">Om oss</router-link></option>
  </mdc-select>
  <div class="r1SdwuQPU">
    <div class="rkeHdPO7vU">
      <form>
      <input type="text" required class="textpadding" value="" placeholder="eks. Ola" overflow="hidden" text-overflow="ellipsis"/>
    
      <input type="text" required class="textpadding" value="" placeholder="eks. Nordmann" overflow="hidden" text-overflow="ellipsis"/>
    
      <input type="email" class="textpadding" required value="" placeholder="eksempel@hotmail.com" overflow="hidden" text-overflow="ellipsis"/>
    
      <input v-model="$password" type="password" class="textpadding" required value="" placeholder="" overflow="hidden" text-overflow="ellipsis"/>
    
      <input v-model="$password2" type="password" class="textpadding" required value="" placeholder="" overflow="hidden" text-overflow="ellipsis"/>
    
      <button class="HJUr_vdmDU">Submit</button>
      </form>
    </div>
  
    <div class="r1DHOw_mvI">
      <span class="label-fornavn">Fornavn</span>
    
      <span class="label-mail">E-mail</span>
    
      <span class="label-passord">Passord</span>
    
      <span class="label-passord2">Gjennta passord</span>
    
      <span class="label-etternavn">Etternavn</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'registrer',
  data () {
    return {
      email: {
        isUnique (value) {
          if (value === '') return true
// eslint-disable-next-line
var email_regex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(",+"))@(([[0-9]{1,3}.[0-9{1,3}.[0-9{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(email_regex.test(value))
            }, 350 + Math.random() * 300)
          })
        }
      },
      password: {
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
        sameAsPassword: ('password')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HkXuw_Qw8 {
  --mdc-theme-primary: #673ab7;
  --mdc-theme-secondary: #f44336;
  --mdc-theme-background: #ffffff;
  position: relative;
  margin: auto;
  background-image:url(https://images-ext-2.discordapp.net/external/ZdEpDEpUPASjTWYU36ad1AI2V2dOiOxjmA_oCHVHdNA/https/images.kumsia.com/wall1/2000x0/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg?width=834&height=468);
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.HJUr_vdmDU {
  overflow: hidden;
  text-overflow: ellipsis;
  border-width: 0px;
  border-radius: 0px;
  background-color: rgb(140, 140, 140);
  position: absolute;
  width: 200px;
  height: 40px;
  top: 318px;
  left: 44px;
}

.rkeHdPO7vU {
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  position: absolute;
  width: 60%;
  height: 85%;
  top: 26px;
  left: 176px;
}

.label-fornavn {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 108px;
  height: 25px;
  top: 1px;
  left: 0px;
}

.label-mail {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 108px;
  height: 25px;
  top: 135px;
  left: 0px;
}

.label-passord {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 108px;
  height: 25px;
  top: 200px;
  left: 0px;
}

.label-passord2 {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 120px;
  height: 20px;
  top: 270px;
  left: 0px;
}

.label-etternavn {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 139px;
  height: 31px;
  top: 73px;
  left: 0px;
}

.r1DHOw_mvI {
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  position: absolute;
  width: 26%;
  height: 85%;
  top: 26px;
  left: 32px;
}

.r1SdwuQPU {
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  background-color: #38AcEc;
  opacity: 80%;
  position: absolute;
  width: 40%;
  height: 70%;
  top: 20%;
  left: 33%;
}

.textpadding {
  padding: 4px;
  margin-bottom: 35px;
}

</style>
