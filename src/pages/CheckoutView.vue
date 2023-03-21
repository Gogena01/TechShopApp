<template>
    <div class="divCheckOut">
        <div v-for="item of items" :key="item.id" class="prd">
            <ul>
                <div
                    :style="{ background: 'url(' + item.img + ')', backgroundRepeat: 'center', backgroundSize: 'contain', height: '100px', width: '140px', }">
                </div>
                <li>Model: {{ item.model }}</li>
                <li>Price: {{ item.price }}</li>
            </ul>

        </div>

        <div style="position: absolute; top: 90%; left: 30%;">
            <h2>Total price: {{ totalPrice }}</h2>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            items: [],
            totalPrice: 0
        }
    },

    mounted() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.currentUser = user;
                firebase.firestore().collection('checkout').where('email', '==', user.email).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.items.push(doc.data());
                        this.totalPrice += doc.data().price

                    });
                });

            } else {
                this.$router.replace('/login')
            }


        });
    }
}
</script>


<style>
.divCheckOut {
    background-color: white;
    height: 90vh;
    position: absolute;
    left: 30%;
    width: 80vh;
    top: 5%;

}

.prd {
    display: inline-block;
    border: solid 4px rgba(199, 27, 199, 0.527);
    width: 700px;
    margin-top: 300px;
    margin-left: 30px;
    background-color: rgba(199, 27, 199, 0.527);
    color: white;
}
</style>