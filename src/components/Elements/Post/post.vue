<template>
    <div class="post">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
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