<template>
    <div class="post">
        <div class="post--card">
            <img class="card--image" :src="image" alt="post image">
            <h1>{{title}}</h1>
        </div>
        <div class="post--description">
            <p>{{description}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['title', 'description', 'image'],
        mounted(){
            console.log('ready post');
        }
    }
</script>