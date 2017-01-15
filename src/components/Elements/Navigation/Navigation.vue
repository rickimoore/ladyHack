<template>
    <nav class="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse">
        <router-link class="navbar-brand" to="/">
            <span>COMPOUND</span>
        </router-link>
        <ul class="navbar-nav">
            <template v-if="thisRoute == '/'">
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
            </template>
            <template v-if="thisRoute == '/dashboard'">
                <router-link class="nav-item" tag="li" to="/" exact>
                    <a class="nav-link">HOME</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/profile" exact>
                    <a class="nav-link">PROFILE</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/" exact>
                    <a class="nav-link">BLOG</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/register" exact>
                    <a class="nav-link">SETTINGS</a>
                </router-link>
            </template>
            <router-link v-if="thisRoute == '/register'" class="nav-item" tag="li" to="/register" exact>
                <a class="nav-link">SETTINGS</a>
            </router-link>
            <template v-if="thisRoute == '/dashboard' || thisRoute == '/register'">
                <router-link class="nav-item special--item-reverse" tag="li" to="/" exact>
                    <a class="nav-link">
                        <span>SIGN OUT</span>
                    </a>
                </router-link>
            </template>
            <template v-else>
                <router-link class="nav-item special--item" tag="li" to="/register" exact>
                    <a class="nav-link">
                        <span>SIGN UP</span>
                    </a>
                </router-link>
            </template>
        </ul>
    </nav>
</template>
<script>
    import poop from '../Button/button.vue';
    export default{
        components: {
          poop
        },
        computed: {
            thisRoute: function () {
                return this.$route.path;
            }
        }
    }
</script>
