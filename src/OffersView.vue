<template>
    <div class="offersDiv">
        <h1 style="position: absolute; left: 25%; font-weight: 800; font-size: 50px; color: darkmagenta;">Pick one of the best offers</h1>
        <div v-for="item in items" :key="item.id" style="display: inline-block; margin-right: 30px;">
            <div style="margin-top: 250px; margin-left: 30px;">
                <div :style="{ background: 'url(' + item.img + ') no-repeat center', backgroundSize: 'cover', height:'320px', width:'340px' }"></div>
                <p style="font-size: larger; font-weight: 700;">{{ item.model }}</p>
                <p style="font-size: larger; font-weight: 600;">${{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            items: []
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.currentUser = user;
                firebase.firestore().collection('laptops').where('price', '<', 2000).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.items.push(doc.data());
                        this.total += doc.data().price
                    });
                });

            }


        });
    }
}
</script>


<style>
.offersDiv {
    background-color: rgb(241, 191, 241);
    position: absolute;
    top: 5%;
    left: 15%;
    padding: 50px;
    height: 100vh;
    width: 140vh;
}
</style>