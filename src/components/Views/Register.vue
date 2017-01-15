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
        <section>
            <h4>Add up to five skills by entering them below.</h4>
            <div>
                <div class="tags-container">
                    <input type="text" v-model="tagInput" @keyup.enter="addTag">
                    <button class="secondary hasBorder">Add</button>
                </div>
                <div class="tags" v-show="tags.length > 0">
                    <span class="tag" v-for="(tag, index) in tags">{{tag}}</span>
                </div>
            </div>
        </section>
        <section class="next-container">
            <div class="next">
                <router-link to="/dashboard" exact>
                    <button>next</button>
                </router-link>
            </div>
        </section>
    </main>
</template>
<script>
    import checkbox from '../Elements/Checkbox/checkbox.vue';
    import button from '../Elements/Button/button.vue';
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
                tagInput: '',
                tags: []
            }
        },
        methods: {
            addTag: function () {
                this.tags.push(this.tagInput);
                this.tagInput = '';
            }
        },
        components: {
            checkbox, button
        }
    }
</script>
