<template>
    <div class="offersDiv" v-if="items.length > 0">
        <h1 style="position: absolute; left: 25%; font-weight: 800; font-size: 50px; color: darkmagenta;">Pick one of the
            best offers</h1>
        <div v-for="item in items" :key="item.id" style="display: inline-block; margin-right: 30px;">
            <div style="margin-top: 250px; margin-left: 30px;">
                <div
                    :style="{ background: 'url(' + item.img + ') no-repeat center', backgroundSize: 'cover', height: '320px', width: '340px' }">
                    <span class="off">OFFER</span>
                </div>
                <p style="font-size: larger; font-weight: 700;">{{ item.model }}</p>
                <p style="font-size: larger; font-weight: 600;">${{ item.price }}</p>
                <button class="favourites" v-on:click="addToFavourite(item.name,item.price,item.img, item.id)"><font-awesome-icon icon="heart" /></button>
                <button class="cart" style="margin-left: 15px;" v-on:click="addToCart(item.name,item.price,item.img,item.id)"><font-awesome-icon icon="shopping-cart" /></button>
            </div>
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

        firebase.firestore().collection('laptops').where('price', '<', 2000).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.items.push(doc.data());
                this.total += doc.data().price
            });
        });
    },

    methods: {
        addToCart(productName, productPrice, img, id) {
            const user = firebase.auth().currentUser;
            if (user) {
                const db = firebase.firestore();

                const data = {
                    name: productName,
                    price: productPrice,
                    email: firebase.auth().currentUser.email,
                    image: img,
                    id: id
                };

                db.collection('cart').doc().set(data)
                    .then(() => {
                        console.log('Data inserted successfully!');
                    })
                    .catch((error) => {
                        console.error('Error inserting data: ', error);
                    });
            } else {
                this.$router.replace('/login')
            }
        },


        addToFavourite(productName, productPrice, img) {
            const db = firebase.firestore();
            const data = {
                name: productName,
                price: productPrice,
                email: firebase.auth().currentUser.email,
                image: img,
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
.offersDiv {
    background-color: rgb(241, 191, 241);
    position: absolute;
    top: 5%;
    left: 15%;
    padding: 50px;
    height: max-content;
    width: 140vh;
}


.cart {
    width: 40px;
    background-color: purple;
    color: white;
    border-color: purple;
    border-radius: 20%;
    transition: all 0.5s;
    opacity: 0.7;
}

.cart:hover {
    opacity: 1;
}

.favourites {
    width: 40px;
    width: 40px;
    background-color: purple;
    color: white;
    border-color: purple;
    border-radius: 20%;
    opacity: 0.7;
}

.favourites:hover {
    opacity: 1;
}

.off {
    background-color: red;
    padding: 3px;
    margin-left: 130px;
    color: white;
}

.lds-roller {
    display: inline-block;
    position: absolute;
    left: 45%;
    top: 40%;
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
}
</style>