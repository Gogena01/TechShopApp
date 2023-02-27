<template>
    <div class="template">
        <h3 style="font-size: 60px;">Welcome, {{ user.displayName }}</h3>
        <p style="font-size:30px ">{{ user.email }}</p>

        <div class="controls">
            <button type="submit" class="btn btn-dark btn-lg btn-block" @click="logOut()">
                Log out
            </button>
            <a style="margin-left: 4px;" href="/catalog">
                <button class="btn btn-primary btn-lg btn-block">
                    Go to catalog
                </button>
            </a>
        </div>
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
.template {
    margin-left: 690px;
    margin-top: 350px;
    background-color: white;
    padding: 50px 50px;
    border-radius: 10%;
    text-align: center;
}

.controls {
    margin-top: 40px;
}
</style>


