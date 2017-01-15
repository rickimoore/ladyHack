<template>
    <main class="dashboard">
        <div class="event--notification">
            <new-event></new-event>
        </div>
        <blog-posts state="dashboard"></blog-posts>
    </main>
</template>
<script>
    import newEvent from '../Layouts/Events/NewEvent.vue';
    import blogPosts from '../Layouts/Posts/Posts.vue';
    export default{
        components: {
            newEvent, blogPosts
        }
    }
</script>
