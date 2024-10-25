<script lang="ts">
    export default {
        data(){
            return{
                cardSize:"200px",
                opacity:"20%",
                cardQuantity:3,
                position:0,
                cardDisplay:[
                "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                "https://logospng.org/download/css-3/logo-css-3-2048.png",
            ]
            }
        }
    }
</script>
<template>
    <div class="cards">
        <div v-for="(card,index) of cardDisplay" class="card" :style="`--position:${index}`"><img :src="card" alt=""></div>
    </div>
</template>

<style scoped>
.cards{
    position: absolute;
    width:v-bind('cardSize');
    top:calc(50% - v-bind('cardSize')/2);
    left:calc(50% - v-bind('cardSize')/2);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: spin 20s linear infinite;
}
@keyframes spin{
    from{
        transform: perspective(1000px) rotateY(0deg);
    }to{
        transform: perspective(1000px) rotateY(360deg);
    }
}

.cards .card{
    
    position:absolute;
    top:100px;
    transform: 
        rotateY(calc((var(--position) - 1)*(360 / v-bind('cardDisplay.length'))*1deg))
        translateZ(calc(v-bind(cardSize)));
}

.cards .card img{
    background-color: transparent;
    width:100%;
}
</style>