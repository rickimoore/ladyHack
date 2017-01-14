<template>
    <main class="register">
        <h1>This is the registration View.</h1>
        <h2>title</h2>
        <section>
            <checkbox v-for="(check, index) in checkboxesInterests" :label="check"></checkbox>
        </section>
    </main>
</template>
<script>
    import checkbox from '../Elements/Checkbox/checkbox.vue';
    export default{
        mounted(){
            console.log('this is the register page');
        },
        data: function(){
            return {
                checkboxesInterests: ['Engineer', 'Design', 'Data Science', 'Product Management', 'Event Planning', 'Fasion', 'Marketing', 'Finance', 'Other']
            }
        },
        components: {
            checkbox
        }
    }
</script>
