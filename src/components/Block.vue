<script setup lang="ts">
    import { ref, computed } from 'vue';
    const props = withDefaults(defineProps<{
        size?: string,
        color?: string,
        title:string,
        date?: string
    }>(), {
        size: "120px",
        color: "blue", date: "2024-9-11"});

    function getShadowColor(color:String|undefined):String{
        if (color === "red") return "#dd8888";
        if (color == "yellow") return "#dddd88";
        if (color === "orange") return "#ddaa88";
        if (color === "blue") return "#aabbdd";
        if (color === "green") return "#88dd88";
        return "#888888";
    }

    function getBorderColor(color:String|undefined):String{
        if (color === "red") return "#b43f3f";
        if (color == "yellow") return "#b4b43f";
        if (color === "orange") return "#b46f3f";
        if (color === "blue") return "#aaaacc";
        if (color === "green") return "#3fb43f";
        return "#888888";
    }

    const style = computed(() => ({
        'box-shadow': `1px 2px 2px 1px ${getShadowColor(props.color)}`,
        'border': `1px solid ${getBorderColor(props.color)}`

    }));
</script>

<template>
    <a @click.prevent="" style="color:inherit;text-decoration: inherit;">
    <div class="container" :style="style">
        <div id="content">
            <h3>{{title}}</h3>
            <slot>This is a Block</slot>
            
        </div>
    </div>
    </a>
</template>

<style scoped>
div.container {
    position: relative;
    width: calc(100% - 20px);
    padding: 0px 0px;
    margin: 30px 10px;
    border-radius: 0px 20px 0px 20px;
    max-height: 120px;
    overflow-y: hidden;
    transition: 0.5s;
    
    transition-timing-function: ease-out;
}

div.container::before{
    content:"";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 0px 20px;
    background: linear-gradient(to bottom, #ffffff00, #f0f0f0ff);
    transition: 0.5s;
}

div.container:hover{
    
    transition-timing-function: ease-in;
    max-height: 100%;
}

div.container:hover::before{
    opacity: 0;
}

#content {
    margin: 10px;
    z-index: 2;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    overflow-y: scroll;
}
#content::-webkit-scrollbar{
    display:none
}

div.container:hover #content{
    overflow-y: scroll;
}

div.container:hover #content::-webkit-scrollbar{
    display:block;
}
</style>