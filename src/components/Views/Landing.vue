<template>
    <div id="landing">
        <jumbo></jumbo>
        <event-list></event-list>
        <blog-posts state="landing"></blog-posts>
        <about></about>
    </div>
</template>
<script>
    import jumbo from '../Layouts/Jumbo/Jumbo.vue';
    import eventList from '../Layouts/Events/Events.vue';
    import blogPosts from '../Layouts/Posts/Posts.vue';
    import about from '../Layouts/About/About.vue';
    export default{
        components: {
            jumbo, eventList, blogPosts, about
        }
    }
</script>