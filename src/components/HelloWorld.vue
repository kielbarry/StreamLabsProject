<template>
  <div class="hello">


<!--     <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>
 -->
    <div class="g-signin2" data-onsuccess="onSignIn" data-onerror="onSignInError"></div>

  <button  v-on:click="signOut"
  ></button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      googleSignInParams: {
        client_id: '959853393195-vtnnm4ktmj5tjnmiji6hdmi5doj057ge.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignIn(googleUser){
      console.log("HEREEEEEEE", googleUser)
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile)
    },
    onSignInError(err) {
      console.log("here is the ERRORRRRRRR", err)
    },
    signOut() {
      gapi.auth2.getAuthInstance().disconnect();
    },


    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile)

    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

</style>
