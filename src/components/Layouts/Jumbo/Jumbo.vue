<template>
    <div class="jumbo container">
        <div class="jumbo--screen">
            <img class="screen" src="src/assets/images/stock/stock-event.jpg" alt="laughing image">
            <div class="jumbo--actions">
                <h1 class="action--callout">
                    Compound is bridging the gap between<br>young professionals and<br>helping them pursue their passions.
                </h1>
                <div class="action--btns">
                    <router-link class="nav-item" to="/register" exact>
                        <a class="action--btn">
                            <button class="large">
                                I'm looking for a project
                            </button>
                        </a>
                    </router-link>
                    <router-link class="nav-item" to="/register" exact>
                        <a class="action--btn">
                            <button class="large secondary">
                                I'm looking for people
                            </button>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted(){
            console.log('ready');
        }
    }
</script>
