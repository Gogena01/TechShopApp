<template>
    <div class="favDiv">
        <h1 style="margin-left: 460px; font-weight: 800; margin-top: 50px;">{{ currentUser.displayName }}'s favourites </h1>
        <hr>
        <ul v-for="item of items" :key="item.id" class="prod" >
            <div>
                <img :style="{ background: 'url(' + item.image + ')', backgroundRepeat: 'center', backgroundSize: 'cover', width: '400px', height: '300px' }">
                <ul>
                    <li>Model: {{ item.name }}</li>
                    <li>${{ item.price }}</li>
                </ul>
                <br>
                <button class="addFavBtn" v-on:click="addToCart(item.name,item.price,item.image,item.id)">Add to cart</button>
            </div>

        </ul>
    </div>
</template>


<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            currentUser: null,
            items: []
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.currentUser = user;
                firebase.firestore().collection('favourites').where('email', '==', user.email).get().then(querySnapshot => {
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
        addToCart(productName, productPrice, img, id) {
            const user = firebase.auth().currentUser;
            if (user) {
                const db = firebase.firestore();

                const data = {
                    name: productName,
                    price: productPrice,
                    email: firebase.auth().currentUser.email,
                    image: img,
                    id:id
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
        }
    }
}

</script>



<style>
.favDiv {
    position: absolute;
    top: 7%;
    left: 17%;
    color: black;
    background-color: rgb(247, 214, 242);
    height: 130vh;
    width: 130vh;

}

.prod {
    margin-top: 150px;
    display: inline-block;
}

.addFavBtn {
    background-color: purple;
    border-color: purple;
    opacity: 0.7;
}

.addFavBtn:hover {
    opacity: 1;
}
</style>