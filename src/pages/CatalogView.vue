<template>
    <div class="container d-flex justify-content-center mt-100">
        <div class="row">
            <div style="margin-left: 260px; color: white; margin-bottom: 20px;">
                <h1>Find some of our products</h1>
            </div>
            <div class="col-md-3">
                <div class="product-wrapper mb-45 text-center">
                    <div class="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/tL7ZE46.jpg"
                                alt=""> </a> <span class="text-center"><i class="fa fa-rupee">2000</i></span>
                        <div class="product-action">
                            <div class="product-action-style"><a href="#" style="font-size: large;"> <i class="fa fa-plus"></i></a> <a href="/laptops"> <i
                                        class="fa fa-heart"></i>Laptops </a> <a href="#"> <i class="fa fa-shopping-cart"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="product-wrapper mb-45 text-center">
                    <div class="product-img"> <a href="#" data-abc="true"> <img style="height: 330px;" src="../assets/computer.jpg"
                                alt=""> </a> <span><i class="fa fa-rupee"></i> 1500</span>
                        <div class="product-action">
                            <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal"
                                    data-target="#exampleModal" href="#" data-abc="true">Computers <i class="fa fa-plus"></i> </a> <a
                                    class="action-heart" title="Wishlist" href="#" data-abc="true"> <i
                                        class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#"
                                    data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="product-wrapper mb-45 text-center">
                    <div class="product-img"> <a href="#" data-abc="true"> <img style="height: 330px;" src="../assets/accessories.jpg"
                                alt=""> </a> <span><i class="fa fa-rupee"></i> 33,000</span>
                        <div class="product-action">
                            <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal"
                                    data-target="#exampleModal" href="#" data-abc="true"> <i class="fa fa-plus"></i>Accessories </a> <a
                                    class="action-heart" title="Wishlist" href="#" data-abc="true"> <i
                                        class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#"
                                    data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="product-wrapper mb-45 text-center">
                    <div class="product-img"> <a href="#" data-abc="true"> <img style="height: 330px; width: 250px;" src="../assets/Assassin's Creed Valhalla Axe Gameplay 4K Ultra HD Mobile Wallpaper.jpg"
                                alt=""> </a> <span><i class="fa fa-rupee"></i> 23,000</span>
                        <div class="product-action">
                            <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal"
                                    data-target="#exampleModal" href="#" data-abc="true"> <i class="fa fa-plus"></i> Games</a> <a
                                    class="action-heart" title="Wishlist" href="#" data-abc="true"> <i
                                        class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#"
                                    data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Calibri:400,300,700);


body {
    display:block;
    font-family: 'Calibri', sans-serif !important;
    background-color: #e9e0e0;
    
}

.mt-100 {
    margin-top: 230px;
    background-color: rgba(15, 14, 14, 0.555);
    width: 1000px;
    padding: 20px;
    height: 600px;
}

.product-wrapper,
.product-img {
    overflow: hidden;
    position: relative;
    width: 200px;
    border-style:inset;
    border-color: #1f0707;
    
}

.mb-45 {
    margin-bottom: 45px;
    margin-left: 8px;
}

.product-action {
    bottom: 0px;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: center;
    transition: all 0.6s ease 0s
}

.product-wrapper {
    border-radius: 10px
}

.product-img>span {
    background-color: #fff;
    box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
    color: #333;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    left: 20px;
    letter-spacing: 1px;
    padding: 3px 12px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 20px;
    transition: all 0.5ms;
}

.product-action-style {
    background-color: #3d0739;
    box-shadow: 0 0 8px 1.7px rgba(0, 0, 0, 0.06);
    display: inline-block;
    padding: 16px 2px 12px
}

.product-action-style>a {
    color: #979797;
    line-height: 1;
    padding: 0 21px;
    position: relative;
    text-decoration:none
}

.product-action-style>a.action-plus {
    font-size: 20px;
}

.product-wrapper:hover .product-action {
    bottom: 20px;
    opacity: 1
}

img:hover {
    webkit-filter: blur(4px); /* Chrome, Safari, Opera */
    filter: blur(2px);
}
</style>