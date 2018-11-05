const yurkaSliderModule = (function() {
    'use strict';

    let numberOfSlides = document.getElementsByClassName('slider-item').length,
        sliderPosition = 0,
        sliderRoot,
        sliderTrack;

    const DEFAULT_CONFIGURATION = {
            slidesToShow: 4,
            slideWidth: 128,
            speed: 2000,
            targetContainer: 'sliderID'
        };


    // Listener
    // document.addEventListener("DOMContentLoaded", function(){ });
    document.getElementById('slider-arrow-next').addEventListener("click", slideNext);
    document.getElementById('slider-arrow-prev').addEventListener("click", slidePrev);


    const init = function(customConfigObj) {
        Object.assign(DEFAULT_CONFIGURATION, customConfigObj);

        sliderRoot = document.getElementById(DEFAULT_CONFIGURATION.targetContainer).getElementsByClassName("slider")[0],
        sliderRoot.style.width = (DEFAULT_CONFIGURATION.slidesToShow * DEFAULT_CONFIGURATION.slideWidth) + 'px';

        _buildTrack();
        setInterval(slidePrev, DEFAULT_CONFIGURATION.speed);

        console.log('Number of slides: ' + numberOfSlides);
        console.log(DEFAULT_CONFIGURATION);
    };


    function _buildTrack() { // private method
        sliderRoot.innerHTML = '<div class="slider-track">' + sliderRoot.innerHTML + '</div>';
        sliderTrack = document.getElementsByClassName('slider-track')[0];
        sliderTrack.style.width = (numberOfSlides * DEFAULT_CONFIGURATION.slideWidth) + 'px';
    }

    function _getSliderPosition () { // private method
        sliderPosition = parseInt(getComputedStyle(sliderTrack).left);
        return sliderPosition;
    }

    function slidePrev () {
        sliderTrack.style.left = (_getSliderPosition() - DEFAULT_CONFIGURATION.slideWidth) + 'px';
    }

    function slideNext () {
        sliderTrack.style.left = (_getSliderPosition() + DEFAULT_CONFIGURATION.slideWidth) + 'px';
    }

    return {
        init: init
    };

})();

window.yurkaSlider = yurkaSliderModule;
