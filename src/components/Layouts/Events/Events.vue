<template>
    <div class="event-container">
        <div class="event--callout">
            <h1>COMPOUND EVENTS</h1>
            <h2>CHECK OUT OUR EVENTS AND MEET PEOPLE THAT CAN CHANGE YOUR LIFE</h2>
        </div>
        <div class="events">
            <event-block v-for="event in events" :title="event.title" :image="event.image" description="event.description"></event-block>
        </div>
        <div class="container--shadow"></div>
        <div class="event--controller right"></div>
        <div class="event--controller left"></div>
    </div>
</template>
<script>
    import eventBlock from '../../Elements/Event/event.vue';
    export default{
        components: {
            eventBlock
        },
        data: function () {
            return {
                events: [
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
                ]
            }
        }
    }
</script>