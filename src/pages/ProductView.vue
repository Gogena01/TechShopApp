<template>
    <div class="singleProduct">
        <div class="inf" v-if="items.length > 0">
            <h1 style="font-weight: 900;">{{ items[0].model }}</h1>
            <img :src="items[0].img" class="productImg">
            <h2 style="font-weight: 700;">Price:${{ items[0].price }}</h2>
            <br>
            <label style="font-size: 30px; font-weight: 800;">Description:</label>
            <p style="font-size: 25px;" class="pProd">{{ items[0].description }}</p>
            <br>
            <div class="navigProd">
                <button v-on:click="addToCart(items[0].model, items[0].price, items[0].image)" class="btnAddCart">Add to
                    cart <font-awesome-icon icon="shopping-cart" /></button>
                <button v-on:click="addToFavourite(items[0].model, items[0].price, items[0].img)" class="btnAddFav">Add to
                    favourites <font-awesome-icon icon="heart" /></button>
            </div>
        </div>
        <div v-else>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase';

export default {
    name: 'productsView',
    data() {
        return {
            items: [],
            id: this.$route.params.id
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(this.id)
                firebase.firestore().collection('laptops').where('id', '==', Number(this.id)).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.items.push(doc.data())
                    });
                });

            }


        });

    },

    methods: {
        addToCart(productName, productPrice, img) {
            const db = firebase.firestore();

            const data = {
                name: productName,
                price: productPrice,
                email: firebase.auth().currentUser.email,
                image: img
            };

            db.collection('cart').doc().set(data)
                .then(() => {
                    console.log('Data inserted successfully!');
                })
                .catch((error) => {
                    console.error('Error inserting data: ', error);
                });
        },


        addToFavourite(productName, productPrice, img) {
            const db = firebase.firestore();
            const data = {
                name: productName,
                price: productPrice,
                email: firebase.auth().currentUser.email,
                image: img
            };

            db.collection('favourites').doc().set(data)
                .then(() => {
                    console.log('Data inserted successfully!');
                })
                .catch((error) => {
                    console.error('Error inserting data:', error)
                })
        }
    }
}
</script>


<style>
.singleProduct {
    position: absolute;
    top: 7%;
    left: 18%;
    background-color: rgb(229, 183, 238);
    height: 110vh;
    width: 125vh;
    padding: 50px;
}

.productImg {
    height: 400px;
    width: 500px;
    border: solid 2px;
    border-color: rgb(168, 9, 168);
}

.inf {
    position: absolute;
    left: 15%;
    top: 2%;
    text-align: center;
}

.pProd {
    width: 800px;
    text-align: center;
    font-weight: 700;
    height: min-content;
}

.navigProd {
    display: inline-block;
}


.btnAddCart {
    background-color: purple;
    border-color: purple;
    color: white;
    border-radius: 10%;
    margin-right: 5px;
    padding: 10px;
    opacity: 0.7;
    transition: all 0.5s;
}

.btnAddFav {
    background-color: purple;
    border-color: purple;
    color: white;
    border-radius: 7%;
    margin-left: 5px;
    padding: 10px;
    transition: all 0.5s;
    opacity: 0.7;
}

.btnAddCart:hover {
    opacity: 1;
    font-size: 16.5px;
}

.btnAddFav:hover {
    opacity: 1;
    font-size: 16.5px;
}

.lds-roller {
    display: inline-block;
    position: absolute;
    left: 45%;
    top: 30%;
    width: 80px;
    height: 80px;
}

.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
}

.lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
}

.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
}

.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
}

.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}

.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
}

.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
}

.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
}

.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
}

@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>