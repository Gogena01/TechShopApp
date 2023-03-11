<template>
    <div>
        <div>Welcome to your cart, {{ items[0].username }}</div>
        <ul>
            <h2>Item name</h2>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            <h2>Item price</h2>
            <li v-for="item in items" :key="item.id">${{ item.price }}</li>
        </ul>
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
        firebase.firestore().collection('cart').where('username', '==', currentUser.displayName).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.items.push(doc.data());
            })
        })
    }
}
</script>