<template>
    <div class="checkbox" @click="toggle">
        <span :class="{'is-checked': isChecked}">{{label}}</span>
    </div>
</template>
<script>
    export default{
        props: ['label'],
        mounted(){
            console.log('now we cooking');
        },
        data: function() {
            return {
                isChecked: false
            }
        },
        methods:{
            toggle: function(){
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>
