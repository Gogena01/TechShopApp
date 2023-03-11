<template>
    <div class="cartD">
        <h1 style="margin-left:200px;">Welcome to your cart, {{ items[0].username }}</h1>
        <div class="col-md-6 col-lg-4 col-xl-3" style="margin-left:100px; margin-top: 200px;">
            <div id="product-2" class="single-product">
                <div class="part-1"
                    :style="{ background: 'url(' + items[0].image + ')', backgroundRepeat: 'center', backgroundSize: 'contain' }">
                </div>
                <div class="part-2" style="color: white;">
                    <h3 class="product-title">{{ items[0].name }}</h3>
                    <h4 class="product-price">${{ items[0].price }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            items: [],

        }
    },
    mounted() {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser)
        firebase.firestore().collection('cart').where('username', '==', currentUser.displayName).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.items.push(doc.data());
            })
        })
    }
}
</script>


<style>
.part-1 {
    height: 300px;
    width: 300px;
}

.cartD {
    background-color: rgba(209, 93, 93, 0.699);
    position: absolute;
    left: 25%;
    top: 20%;
    width: 100vh;
    place-items:inherit;
    display: block;
}
</style>