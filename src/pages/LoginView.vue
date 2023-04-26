<template>
  <div class="App">
    <div class="vertical-center">
      <div class="inner-block">
        <div class="vue-tempalte">
          <form @submit.prevent="userLogin">
            <h3 style="font-weight: 900;color: purple;">Sign In</h3>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>
            <br>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/forgot-password" style="color: purple;">Forgot password ?</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push('/welcome')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>

<style>
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}

.inner-block {
  width: 500px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}
</style>

