<template>
    <div class="event--update">
        <transition name="fade">
            <div class="modal--container" v-show="isPopUp">
                <div class="modal--overlay"></div>
                <transition name="slideUp">
                    <div class="modal" v-show="isModal">
                        <div class="whiteBoard">
                            <img src="src/assets/images/stock/checkgif.gif" alt="check gif">
                            <div class="message">
                                <h1>You have Successfully Registered for <br> {{eventName}}</h1>
                                <span>Collect Your Ticket Here!</span>
                                <button>Go To My Tickets</button>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
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
                            <button @click="togglePopup(true, 'Sustainability Jam')">
                                <span>Attend The Event</span>
                            </button>
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
        data: function () {
            return {
                timer: 0,
                isPopUp: false,
                isModal: false,
                eventName: ''
            }
        },
        methods: {
            togglePopup: function (direction, $eventName) {
                var self = this;
                if(direction){
                    this.isPopUp = true;
                    this.eventName = $eventName;
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        self.isModal = true;
                    }, 500);
                }
            }
        }
    }
</script>