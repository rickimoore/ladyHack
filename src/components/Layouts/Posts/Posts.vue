<template>
    <div class="blog" :class="{'extra-padding': state == 'dashboard'}">
        <div class="blog--callout">
            <template v-if="state =='dashboard'">
                <h1>RECENT BLOG POSTS</h1>
            </template>
            <template v-else>
                <h1>CHECK OUT OUR BLOG</h1>
                <h2>GET ADVICE, MENTORSHIP, AND MORE!</h2>
            </template>
        </div>
        <div class="posts">
            <post v-for="post in posts" :title="post.title" :description="post.description" :image="post.image"></post>
        </div>
    </div>
</template>
<script>
    import post from '../../Elements/Post/post.vue';
    export default{
        props: ['state'],
        data: function () {
            return {
                posts: [
                    {
                        title: 'Strategic Planning Made Easy',
                        description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                        image: 'src/assets/images/stock/stock-2.jpg'
                    },
                    {
                        title: 'How To Be Effecient In An Interview',
                        description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                        image: 'src/assets/images/stock/stock-1.jpg'
                    },
                    {
                        title: 'Work Place Stress Relief',
                        description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                        image: 'src/assets/images/stock/stock-3.jpg'
                    }
                ]
            }
        },
        components: {
            post
        }
    }
</script>