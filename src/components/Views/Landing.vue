<template>
    <div id="landing">
        <h1>This is the Landing Page</h1>
        <posts></posts>
    </div>
</template>
<script>
    import posts from '../Layouts/Posts.vue';
    export default{
        mounted(){
            console.log('working correctly');
        },
        components: {
            posts
        }
    }
</script>