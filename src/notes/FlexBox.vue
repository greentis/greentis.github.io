<script setup lang="ts">
    let sections = [
        {title:"Car",content:"Fast, low capacity"},
        {title:"Train",content:"High capacity, Point to Point"},
        {title:"Bus",content:"Flexible, slow"},
        ]
</script>
<template>
    <div class="row">
        <div v-for="sec of sections" class="block">
            <div class="box">{{sec.title}}</div>
            <div class="details"><h3>{{sec.content}}</h3></div>
        </div>
    </div>
</template>

<style scoped>
*{
    /* variable declaration */
    --position:0;
}

.box{
    background: #222831;
    width: 100px;
    aspect-ratio: auto 1 / 2;
    
    color: #fff;
    text-align: center;
    
    display:flex;
    position: relative;
    align-items: center;
    justify-content: center;

    font-size: 25px;
    font-family: Arial, Arial, Helvetica, sans-serif;
    font-weight: bold;

    transition: 0.3s;
}


.box::after{
    content:'';
    position:absolute;
    height: 105%;
    width: 105%;

    transition: 0.3s;
    background-image: linear-gradient(to bottom right, #008cff, #e100ff);
    z-index: -1;
}

.box:hover{
    width:120px;
    background: #008cff;
    box-shadow: -5px -20px 40px #008cff85,10px 20px 40px #e100ffcc;
}

.block:has(.box:hover){
    box-shadow: -10px 10px 10px #51504d88;
}

.block{
    width: 98%;
    display: flex;
    
    flex-direction:row;
    flex-shrink: 0;
    align-items:center;
    justify-items: center;
    position: relative;
    padding: 0%;
}

h3{
    padding: 10px;
}
</style>