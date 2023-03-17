<template>
    <div class="mainD">
        <!-- <img src="../assets/fluxSlide/Awesome White Minimalist Wallpapers - WallpaperAccess.png" class="mainImg" />-->
        <div class="mainNav">
            <a href="/favourites" class="one" style="text-decoration: none;">Favourites</a>
            <a href="/cart" class="two" style="text-decoration: none;">Shopping cart</a>
            <a href="/offers" class="three" style="text-decoration: none;">Special Offers</a>
        </div>
        <div class="welc">
            <div class="wrapper" >
                <div class="header header_home">TechShop</div>
                <div class="content content_home">
                    <hr>
                    Welcome to our online store for all your technology needs! We offer a wide
                    range of high-quality laptops, accessories, games, and computers to meet your everyday technology needs.
                    Whether you are a professional, a gamer, or just looking for an upgrade, we have the perfect products
                    for you.</div>
                <div class="image"></div>
            </div>
        </div>


        <footer class="mainFoot" style="display: inline-block;">
            <a href="https://github.com/Gogena01" style="text-decoration: none; color: white;"><font-awesome-icon
                    icon="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/georgi-angelov-a43993251/"
                style="margin-left: 20px; color: white;"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        </footer>
    </div>
</template>



<style scoped>
.mainImg {
    width: 199.3vh;
    height: 105vh;
    opacity: 0.4;
    position: relative;
    text-align: center;
}

.welc {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 37.6%;
    transform: translate(-50%, -50%);
    justify-content: center;
    color: black;
    height: 400px;
    width: 600px;
    font-weight: 700;
}

.welcButton {
    background-color: rgba(175, 20, 20, 0.925);
    height: 2cm;
    width: 5cm;
    border-color: rgba(175, 20, 20, 0.925);
    border-radius: 5%;
    transition: all 0.5s;
    font-size: 27px;
    margin-top: 120px;
    opacity: 0.5;
    font-weight: 800;
}

.welcButton:hover {
    width: 5.3cm;
    opacity: 1;

}


.mainNav {
    display: inline-block;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.mainNav a {
    margin-right: 50px;
    color: rgb(0, 0, 0);
    transition: all 0.5s;
}

.mainNav .one {
    box-shadow: inset 0 0 0 0 #b408ac;
    color: #ecb8e4;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .8s ease-in-out;
}

.mainNav .two {
    box-shadow: inset 0 0 0 0 #b408ac;
    color: #ecb8e4;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .8s ease-in-out;
}


.mainNav .three {
    box-shadow: inset 0 0 0 0 #b408ac;
    color: #ecb8e4;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .8s ease-in-out;
}


.mainNav .one:hover {
    box-shadow: inset 200px 0 0 0 #b408ac;
    color: white;
}

.mainNav .two:hover {
    box-shadow: inset 200px 0 0 0 #b408ac;
    color: white;
}

.mainNav .three:hover {
    box-shadow: inset 200px 0 0 0 #b408ac;
    color: white;
}


.mainFoot {
    position: absolute;
    bottom: -5%;
    font-size: 30px;
    color: white;
    left: 47%;
}


.footer a {
    margin-left: 20px;
}


.wrapper {
    position: absolute;
    margin: auto;
    top: 20%;
    right: 0;
    bottom: 0;
    left: 0;

    width: 1000px;
    height: 500px;

    background: hsl(305, 47%, 85%);
    box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, .3);
}


/*************/
.nav {
    position: relative;
    left: 2%;
    height: 10%;
    width: max-content;
}

.navbar {
    padding-top: 2%;
}

.navbar li {
    position: relative;
    list-style: none;
    display: inline;
    margin-right: 1vw;

    font-size: 1.225rem;
}

.navbar li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: black;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms ease;
}

.navbar li:hover::after {
    transform: scaleX(1);
    transform-origin: left;

    box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, .1);
}


.header {
    color: #db49d4;
    position: absolute;
    width: max-content;
    font-size: 3rem;

    white-space: nowrap;

    top: 3%;
    left: 16%;
}


.content {
    position: absolute;
    font-size: 1.54rem;
    width: 40%;
    font-family:'Times New Roman', Times, serif;


    top: 19%;
    left: 7%;
}

.image {
    position: absolute;
    top: 0;
    right: 0;

    width: 50%;
    height: 100%;
    background-image: url(../assets/Premium\ Vector\ Software\ development\,\ programming\ language\,\ coding.jpg);
    clip-path: polygon(35% 0%, 100% 0, 100% 100%, 8% 100%);

    background-repeat: no-repeat;
    background-size: contain;
}</style>