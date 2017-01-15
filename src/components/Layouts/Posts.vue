<template>
    <div class="blog-post">
        <div class="post--header">
            <h1>CHECK OUT OUR BLOG</h1>
            <h2>GET ADVICE, MENTORSHIP, AND MORE!</h2>
        </div>
        <div class="post--component posts">
            <post v-for="(post, index) in posts" :title="post.title" :description="post.description" :image="post.image"></post>
        </div>
    </div>
</template>
<script>
    import post from '../Elements/Post/post.vue';
    export default{
        data: function () {
          return {
              activeIndex: '',
              posts: [
                  {
                      title: 'Strategic Planning Made Easy',
                      description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                      image: '/images/stock/stock-1.jpg'
                  },
                  {
                      title: 'How To Be Effecient In An Interview',
                      description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                      image: '/images/stock/stock-2.jpg'
                  },
                  {
                      title: 'Work Place Stress Relief',
                      description: 'Lorem ipsum dolor sit amet, vim enim mollis cu, eu dolores vivendum tractatos duo. Tantas ocurreret',
                      image: '/images/stock/stock-1.jpg'
                  }
              ]
          }
        },
        components: {
            post
        }
    }
</script>