<template>
    <div class="event">
        <div class="event--image">
            <img :src="image" alt="stock-image">
        </div>
    </div>
</template>
<script>
    export default{
        props: ['title', 'image', 'desciption'],
        mounted(){
            console.log('yep still here');
        }
    }
</script>