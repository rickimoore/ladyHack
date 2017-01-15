<template>
    <div class="event--update">
        <div class="update">
            <div class="card--overlay"></div>
            <div id="myCarousel" class="carousel slide" data-interval="false">
                <div class="carousel-content" role="listbox">
                    <div class="item active">
                        <div class="card--overlay"></div>
                        <img class="background" src="src/assets/images/stock/stock-event.jpg" alt="new event">
                        <div class="update--callout">
                            <img class="icon" src="src/assets/images/dates.svg" alt="dates">
                            <span class="title">Sustainability Jam</span>
                            <span class="second-title">19th Janurary, 2017</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card--overlay"></div>
                        <img src="src/assets/images/stock/stock-sponsor.jpg" alt="">
                        <div class="update--callout">
                            <img class="icon" src="src/assets/images/dates.svg" alt="dates">
                            <span class="title">Meet The Sponsors</span>
                            <span class="second-title">17th February, 2017</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card--overlay"></div>
                        <img src="src/assets/images/stock/stock-2.jpg" alt="">
                        <div class="update--callout">
                            <img class="icon" src="src/assets/images/dates.svg" alt="dates">
                            <span class="title">2017 Fashion Design <br> Challenge</span>
                            <span class="second-title">28th Janurary, 2017</span>
                        </div>
                    </div>
                </div>
                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <img class="icon-50p" src="src/assets/images/ic_keyboard_arrow_left_white_24px.svg" alt="previous">
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <img class="icon-50p" src="src/assets/images/ic_keyboard_arrow_right_white_24px.svg" alt="next">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>