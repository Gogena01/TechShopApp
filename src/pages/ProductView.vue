<template>
    <div class="singleProduct">
        <div class="inf">
            <h1 style="font-weight: 900;">{{ items[0].model }}</h1>
            <img :src="items[0].img" class="productImg">
            <h2 style="font-weight: 700;">Price:${{ items[0].price }}</h2>
            <br>
            <label style="font-size: 30px; font-weight: 800;">Description:</label>
            <p style="font-size: 25px;" class="pProd">{{ items[0].description }}</p>
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
            console.log(this.id)
            if (user) {
                firebase.firestore().collection('laptops').where('id', '==', Number(this.id)).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.items.push(doc.data())
                    });
                });

            }


        });

    }
}
</script>


<style>
.singleProduct {
    position: absolute;
    top: 7%;
    left: 18%;
    background-color: rgb(229, 183, 238);
    height: 100vh;
    width: 125vh;
    padding: 50px ;
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
    top:2%;
    text-align: center;
}

.pProd {
  width: 800px;
  text-align: center;
  font-weight: 700;
  height: min-content;
}
</style>