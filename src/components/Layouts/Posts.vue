<template>
    <div class="posts">
        <post v-for="post in posts" :title="post.title" :description="post.description" :image="post.image"></post>
    </div>
</template>
<script>
    import post from '../Elements/Post/post.vue';
    export default{
        data: function () {
          return {
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