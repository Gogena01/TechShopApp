<template>
    <div class="mainDiv">

        <section class="section-products">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="header">
                            <h1>Laptops</h1>
                            <h2 style="font-weight: 800;">Find your dream laptop</h2>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-1" class="single-product">
                            <div class="part-1"
                                :style="{ background: 'url(' + items[1].image + ') no-repeat center', backgroundRepeat: 'center', backgroundSize: 'cover' }">
                                <ul>
                                    <li><a v-on:click="addToCart(items[1].model,items[1].price, items[1].image )" href="#"><font-awesome-icon icon="shopping-cart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="heart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="plus" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-readme" /></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">{{ items[1].model }}</h3>
                                <h4 class="product-old-price">${{ items[1].price }}</h4>
                                <h4 class="product-price">$1899.99</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-2" class="single-product">
                            <div class="part-1"
                                :style="{ background: 'url(' + items[0].img + ')', backgroundRepeat: 'center', backgroundSize: 'cover' }">
                                <span class="discount">15% off</span>
                                <ul>
                                    <li><a v-on:click="addToCart(items[0].model,items[0].price, items[0].img )"><font-awesome-icon icon="shopping-cart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="heart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="plus" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-readme" /></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">{{ items[0].model }}</h3>
                                <h4 class="product-price">${{ items[0].price }}</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-3" class="single-product">
                            <div class="part-1"
                                :style="{ background: 'url(' + items[2].img + ') no-repeat center', backgroundSize: 'cover' }">
                                <ul>
                                    <li><a href="#"><font-awesome-icon icon="shopping-cart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="heart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="plus" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-readme" /></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">{{ items[2].model }}</h3>
                                <h4 class="product-old-price">${{ items[2].oldPrIce }}</h4>
                                <h4 class="product-price">${{ items[2].newPrice }}</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-4" class="single-product">
                            <div class="part-1"
                                :style="{ background: 'url(' + items[3].img + ') no-repeat center', backgroundSize: 'cover' }">
                                <span class="new">new</span>
                                <ul>
                                    <li><a href="#"><font-awesome-icon icon="shopping-cart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="heart" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="plus" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-readme" /></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">{{ items[3].model }}</h3>
                                <h4 class="product-price">{{ items[3].price }}</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-1" class="single-product">
                            <div class="part-1">
                                <ul>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">Here Product Title</h3>
                                <h4 class="product-old-price">$79.99</h4>
                                <h4 class="product-price">$49.99</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-2" class="single-product">
                            <div class="part-1">
                                <span class="discount">15% off</span>
                                <ul>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">Here Product Title</h3>
                                <h4 class="product-price">$49.99</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-3" class="single-product">
                            <div class="part-1">
                                <ul>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">Here Product Title</h3>
                                <h4 class="product-old-price">$79.99</h4>
                                <h4 class="product-price">$49.99</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Single Product -->
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id="product-4" class="single-product">
                            <div class="part-1">
                                <span class="new">new</span>
                                <ul>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">Here Product Title</h3>
                                <h4 class="product-price">$49.99</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        firebase.firestore().collection('laptops').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.items.push(doc.data())
            })
        })
    },
    methods: {

        addToCart(productName, productPrice, img) {
            // Get a reference to the Firestore database
            const db = firebase.firestore();

            // Construct the data to be inserted
            const data = {
                name: productName,
                price: productPrice,
                email:firebase.auth().currentUser.email,
                image: img
            };

            // Insert the data into the "cart" collection
            db.collection('cart').doc().set(data)
                .then(() => {
                    console.log('Data inserted successfully!');
                })
                .catch((error) => {
                    console.error('Error inserting data: ', error);
                });
        }
    }

}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');


section {
    margin-left: 30px;
}

hr {
    border: 1px solid rgb(110, 4, 105);
    border-radius: 5px;
}

.mainDiv {
    background-color: rgba(255, 255, 255, 0.795);
    margin-left: 217px;
    padding: 70px;
}

a,
a:hover {
    text-decoration: none;
    color: inherit;
}

.section-products {
    margin-bottom: 50px;
    padding: 80px 0 54px;
}

.section-products .header {
    margin-bottom: 70px;
}

.section-products .header h1 {
    font-size: 3.5rem;
    color: #0a0a0a;
    font-weight: 700;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.section-products .header h2 {
    font-size: 2.2rem;
    font-weight: 500;
    color: #292828;
}

.section-products .single-product {
    margin-bottom: 50px;
}

.section-products .single-product .part-1 {
    position: relative;
    height: 290px;
    max-height: 290px;
    margin-bottom: 20px;
    overflow: hidden;
}

.section-products .single-product .part-1::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
}

.section-products .single-product:hover .part-1 {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0.6;
}

.section-products #product-1 .part-1 {
    /* background: url("./assets/laptops/asusTuf.jpg") no-repeat center;*/
    /*background-size: cover;*/
    background-repeat: no-repeat;
    transition: all 0.5s;
}

.section-products #product-2 .part-1 {
    /* background: url("./assets/laptops/macbook.jpg") no-repeat center;*/
    background-size: cover;
    transition: all 0.5s;
}

.section-products #product-3 .part-1 {
    /*background: url("./assets/laptops/razerBlade.jpg") no-repeat center;*/
    background-size: cover;
    transition: all 0.5s;
}

.section-products #product-4 .part-1 {
    /*background: url("./assets/laptops/acer15.jpg") no-repeat center;*/
    background-size: cover;
    transition: all 0.5s;
}

.section-products .single-product .part-1 .discount,
.section-products .single-product .part-1 .new {
    position: absolute;
    top: 15px;
    left: 20px;
    color: #ffffff;
    background-color: #fe302f;
    padding: 2px 8px;
    text-transform: uppercase;
    font-size: 0.85rem;
}

.section-products .single-product .part-1 .new {
    left: 0;
    background-color: #444444;
}

.section-products .single-product .part-1 ul {
    position: absolute;
    bottom: -41px;
    left: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: bottom 0.5s, opacity 1s;
}

.section-products .single-product:hover .part-1 ul {
    bottom: 30px;
    opacity: 1;
}

.section-products .single-product .part-1 ul li {
    display: inline-block;
    margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    color: #444444;
    text-align: center;
    box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
    transition: color 0.2s;
}

.section-products .single-product .part-1 ul li a:hover {
    color: #fe302f;
}

.section-products .single-product .part-2 .product-title {
    font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
    display: inline-block;
    font-size: 1rem;
}

.section-products .single-product .part-2 .product-old-price {
    position: relative;
    padding: 0 7px;
    margin-right: 2px;
    opacity: 0.6;
}

.section-products .single-product .part-2 .product-old-price::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444444;
    transform: translateY(20%);
}
</style>