<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="#" target="_blank"
          style="font-weight: 800; color: purple; font-size: 30px;">
          TechShop <font-awesome-icon icon="fa-solid fa-fire" />
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" id="home">
            <router-link class="btn btn-outline-dark" id="prup" to="/" style="margin-right: 10px;">Home</router-link>
          </li>
          <li class="nav-item" id="catalog">
            <router-link class="btn btn-outline-dark" id="purp" to="/catalog"
              style="margin-right: 10px;">Catalog</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item" id="login">
            <router-link class="btn btn-outline-dark" id="purp" to="/login" style="margin-right: 10px;">Sign
              in</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item" id="register">
            <router-link class="btn btn-outline-dark" id="purp" to="/sign-up" style="margin-right: 10px;">Sign
              up</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item" id="purp">
            <router-link class="btn btn-outline-dark" id="purp" to="/cart" style="margin-right: 10px;"> <font-awesome-icon icon="shopping-cart" /></router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item" id="logout">
            <button type="submit" class="btn btn-outline-dark" id="purp" @click="logOut()" style="margin-right: 10px;">
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main -->

    <router-view />

  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  computed: {
    isLoggedIn() {
      return this.user !== null;
    },
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }

};
</script>



<style>
.btn-outline-danger {
  border-color: rgb(209, 10, 209);
  color: rgb(209, 10, 209);
}

.btn-outline-danger:hover {
  background-color: rgb(209, 10, 209);
}</style>

