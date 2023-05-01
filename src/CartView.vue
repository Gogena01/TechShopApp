<template>
    <div class="cartD">
        <h1 style="margin-left:390px; font-weight: 800;">Welcome to your cart, {{ currentUser.displayName }}</h1>
        <h2 style="margin-left: 500px; font-weight: 700;">Total price:{{ total }}$</h2>
        <br />
        <a href="/checkout" style="margin-left: 580px;">
            <button class="btnCheckout"> Checkout </button>
        </a>
        <hr style="top:50%">
        <div class="row" style="margin-left: 100px; margin-top: 200px;">
            <div v-if="items.length > 0">
                <div v-for="item in items" :key="item.id" class="col-md-6 col-lg-4 col-xl-3" style="display: inline-block; margin-right: 120px; bottom: 20px;">
                    <div id="product-2" class="single-product">
                        <div class="part-1"
                            :style="{ background: 'url(' + item.image + ')', backgroundRepeat: 'center', backgroundSize: 'cover' }">
                        </div>
                        <div class="part-2" style="color: black;">
                            <h3 class="product-title">{{ item.name }}</h3>
                            <h4 class="product-price">${{ item.price }}</h4>
                        </div>
                        <div>
                            <button v-on:click="addToCheckout(item.name, item.price, item.image, item.id)"
                                class="btnCheck">Buy product</button>
                            <button v-on:click="removeFromCart(item.id)" class="delBtn">Remove from cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h1 class="empty">Your cart is empty.</h1>
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
            total: 0
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

            } else {
                this.$router.replace('/login')
            }


        });



    },


    methods: {
        removeFromCart(id) {
            firebase.firestore().collection('cart')
                .where('id', '==', id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete().then(() => {
                            // Item successfully deleted from collection
                            // Remove item from local items array and update total
                            const itemIndex = this.items.findIndex(item => item.id === id);
                            this.total -= this.items[itemIndex].price;
                            this.items.splice(itemIndex, 1);
                        }).catch(error => {
                            console.error('Error removing item: ', error);
                        });
                    });
                });
        },


        addToCheckout(itemModel, itemPrice, img, id) {
            const db = firebase.firestore();

            const data = {
                model: itemModel,
                price: itemPrice,
                email: firebase.auth().currentUser.email,
                img: img,
                id: id
            };

            db.collection('checkout').doc().set(data)
                .then(() => {
                    console.log('Data inserted successfully!')
                })
                .catch((error) => {
                    console.error(error)
                })



        }
    }

}

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
    height: 120vh;
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

.btnCheck {
    background-color: purple;
    border-color: purple;
    border-radius: 8%;
    opacity: 0.8;
    transition: all 0.5s;
}

.btnCheck:hover {
    opacity: 1;
}

.delBtn {
    background-color: purple;
    border-color: purple;
    border-radius: 8%;
    margin-left: 10px;
    opacity: 0.8;
    transition: all 0.5s;
}

.delBtn:hover {
    opacity: 1;
}


.empty {
    position: absolute;
    top: 40%;
    left: 33%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
}
</style>
  