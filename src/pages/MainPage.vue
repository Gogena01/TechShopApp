<template>
    <div class="mainD">
        <img src="../assets/fluxSlide/digital.jpg" class="mainImg" />
        <div class="welc">
            <a href="/catalog">
                <button class="welcButton">Catalog</button>
            </a>
        </div>
    </div>
</template>


<style scoped>
.mainImg {
    width: 199.3vh;
    opacity: 0.7;
    position: relative;
    text-align: center;
}

.welc {
    position: absolute;
    top: 60%;
    left: 50.4%;
    transform: translate(-50%, -50%);
    justify-content: center;
    color: white;
}

.welcButton {
    background-color: rgb(247, 0, 0);
    height: 3cm;
    width: 6cm;
    border-color: red;
    border-radius: 5%;
    transition: all 0.5s;
    font-size: 27px;

}

.welcButton:hover {
    height: 3.5cm;
    width: 6.5cm;
}


</style>