<template>
    <main class="register">
        <section class="checkboxes">
            <h4>What area are you most interested in?</h4>
            <div>
                <checkbox v-for="(check, index) in checkboxesOne" :label="check"></checkbox>
            </div>
            <div>
                <checkbox v-for="(check, index) in checkboxesTwo" :label="check"></checkbox>
            </div>
            <div>
                <checkbox v-for="(check, index) in checkboxesThree" :label="check"></checkbox>
            </div>
        </section>
        <section class="checkboxes">
            <h4>What kind of employment are you seeking?</h4>
            <div>
                <checkbox v-for="(check, index) in checkboxesFour" :label="check"></checkbox>
            </div>
        </section>
        <section class="checkboxes">
            <h4>What role are you interested in?</h4>
            <div>
                <checkbox v-for="(check, index) in checkboxesFive" :label="check"></checkbox>
            </div>
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
                checkboxesOne: ['Engineer', 'Design', 'Data Science'],
                checkboxesTwo: ['Product Management', 'Event Planning', 'Fasion'],
                checkboxesThree: ['Marketing', 'Finance', 'Other'],
                checkboxesFour: ['Full time', 'Contract', 'Part time', 'Intern'],
                checkboxesFive: ['SEO', 'Social Media', 'Copy Writer', 'Analyst'],
            }
        },
        components: {
            checkbox
        }
    }
</script>
