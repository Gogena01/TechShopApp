<template>
    <div class="App">
        <div class="forgotPass">
            <form @submit.prevent="forgetPassword">
                <h3>Forgot Password</h3>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="user.email" />
                </div>
                <br>
                <button type="submit" class="btn btn-dark btn-lg btn-block" id="reset">Reset password</button>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: {
                email: ''
            }
        };
    },
    methods: {
        forgetPassword() {
            firebase
                .auth()
                .sendPasswordResetEmail(this.user.email)
                .then(() => {
                    alert('Check your registered email to reset the password!')
                    this.user = {
                        email: ''
                    }
                }).catch((error) => {
                    alert(error)
                })
        }
    }
};
</script>


<style>
.forgotPass {
    justify-content: center;
    margin-top: 350px;
    margin-left: 650px;
    background-color: white;
    height: 300px;
    padding: 30px;
    border-radius: 5%;
    width: 520px;
}

#reset {
    margin-top: 20px;
}
</style>