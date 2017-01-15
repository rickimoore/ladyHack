<template>
    <nav class="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse">
        <router-link class="navbar-brand" to="/">
            <span>COMPOUND</span>
        </router-link>
        <ul class="navbar-nav">
            <router-link class="nav-item" tag="li" to="/" exact>
                <a class="nav-link">TALENT</a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/register" exact>
                <a class="nav-link">EMPLOYERS</a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/" exact>
                <a class="nav-link">ABOUT</a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/register" exact>
                <a class="nav-link">HOME</a>
            </router-link>
            <router-link class="nav-item special--item" tag="li" to="/register" exact>
                <a class="nav-link">
                    <span>SIGNUP</span>
                </a>
            </router-link>
        </ul>
    </nav>
</template>
<script>
    import poop from '../Button/button.vue';
    export default{
        components: {
          poop
        },
        mounted(){
            console.log('we are here now vue loader');
        }
    }
</script>