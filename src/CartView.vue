<template>
    <div class="cartD">
        <h1 style="margin-left:350px; font-weight: 800;">Welcome to your cart, {{ currentUser.displayName }}</h1>
        <h2 style="margin-left: 500px; font-weight: 700;">Total price:{{ total }}</h2>
        <br/>
        <a href="/checkout" style="margin-left: 580px;"> <button class="btnCheckout"> Checkout </button></a>
        <hr style="top:50%">
        <div class="row" style="margin-left: 100px; margin-top: 200px;">
            <div v-for="item in items" :key="item.id" class="col-md-6 col-lg-4 col-xl-3" style="margin-right: 200px;">
                <div v-if="items.length > 0" id="product-2" class="single-product">
                    <div class="part-1"
                        :style="{ background: 'url(' + item.image + ')', backgroundRepeat: 'center', backgroundSize: 'cover' }">
                    </div>
                    <div class="part-2" style="color: black;">
                        <h3 class="product-title">{{ item.name }}</h3>
                        <h4 class="product-price">${{ item.price }}</h4>
                    </div>
                </div>
                <div v-else>
                    Your cart is empty.
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
            currentUser: null,
            items: [],
            total:0
        };
    },
    mounted() {
        firebase.auth().onAuthStateChanged(user => {
            
            if (user) {
                this.currentUser = user;
                firebase.firestore().collection('cart').where('email', '==', user.email).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.items.push(doc.data());
                        this.total += doc.data().price                    
                    });
                });
                
            }

            
        });

        
    
    },
};
</script>
  
<style>
.part-1 {
    height: 300px;
    width: 350px;
    border: solid rgb(140, 7, 167) 2px;
}

.cartD {
    background-color: rgba(241, 241, 241, 0.699);
    position: absolute;
    left: 18%;
    top: 7%;
    width: 130vh;
    height: 100vh;
    place-items: inherit;
    display: block;
}

.pr {
    background: url('./assets/laptops/macbook.jpg');
}

.btnCheckout {
    background-color: purple;
    border-color: purple;
    border-radius: 5%;
    color: white;
    padding: 3px;
    opacity: 0.5;
    transition: all 0.5s;
}

.btnCheckout:hover {
    opacity: 1;
    padding: 5px;
}
</style>
  