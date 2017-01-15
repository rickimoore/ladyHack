<template>
    <div class="about">
        <div class="about--content">
            <div class="about--callout">
                <h1>WHAT WE DO</h1>
            </div>
            <div class="about--sections">
                <ul class="about--attributes">
                    <li>
                        <i class="fa fa-connectdevelop fa-lg"></i>
                        <p>Connect Young Professionals to real job opportunities</p>
                    </li>
                    <li>
                        <i class="fa fa-life-ring fa-lg"></i>
                        <p>Provide guidance and mentorship to young women who need support</p>
                    </li>
                    <li>
                        <i class="fa fa-calendar fa-lg"></i>
                        <p>Host events to create a community for women</p>
                    </li>
                    <p class="read-more">READ MORE</p>
                </ul>
                <div class="about--image">
                    <img src="src/assets/images/stock/stock-action.jpg" alt="stock about photo">
                </div>
            </div>
        </div>
        <div class="last--call">
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
                        description: 'Connect Young Professionals to real job opportunities'
                    },
                    {
                        description: 'Provide guidance and mentorship to young women who need support'
                    }, {
                        description: 'Host events to create a community for women'
                    }
                ]
            }
        },
        components: {
            endFooter
        }
    }
</script>
