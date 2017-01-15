<template>
    <div class="about">
        <div class="about--content">
            <div class="about--callout">
                <h1>WHAT WE DO</h1>
            </div>
            <div class="about--sections">
                <ul class="about--attributes">
                    <li v-for="point in attributes">
                        <img :src="point.image" alt="icon">
                        <p>{{point.description}}</p>
                    </li>
                    <p class="read-more">READ MORE</p>
                </ul>
                <div class="about--image">
                    <img src="src/assets/images/stock/stock-action.jpg" alt="stock about photo">
                </div>
            </div>
        </div>
        <div class="last--call">
            <div class="callout">
                <h1 class="last">COMBINING TALENT</h1>
                <router-link class="nav-item" to="/" exact>
                    <a class="nav-link">Sign Up</a>
                </router-link>
            </div>
            <div class="footer">
                <end-footer></end-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import endFooter from '../../Elements/Footer/Footer.vue'
    export default{
        data: function () {
            return {
                attributes: [
                    {
                        description: 'Connect Young Professionals to real job opportunities',
                        image: 'src/assets/images/logo.png'
                    },
                    {
                        description: 'Provide guidance and mentorship to young women who need support',
                        image: 'src/assets/images/logo.png'
                    }, {
                        description: 'Host events to create a community for women',
                        image: 'src/assets/images/logo.png'
                    }
                ]
            }
        },
        components: {
            endFooter
        }
    }
</script>