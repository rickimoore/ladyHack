<template>
    <div class="jumbo container">
        <div class="jumbo--screen">
            <img class="screen" src="src/assets/images/stock/stock-jumbo.jpg" alt="laughing image">
            <div class="jumbo--actions">
                <h1 class="action--callout">
                    Bridging the gap between young <br> professionals and pursuing their <br> passions.
                </h1>
                <router-link class="nav-item" to="/register" exact>
                    <a class="action--btn">
                        <button>
                            Im looking for a project
                        </button>
                    </a>
                </router-link>
                <router-link class="nav-item" to="/register" exact>
                    <a class="action--btn">
                        <button>
                            Im looking for people
                        </button>
                    </a>
                </router-link>
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