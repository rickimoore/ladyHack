<template>
    <div class="post">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <div class="post--card">
            <img class="card--image" :src="image" alt="post image">
            <div class="card--title">
                <h1 class="title">{{title}}</h1>
            </div>
        </div>
        <div class="post--description">
            <h5 class="description">{{description}}</h5>
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