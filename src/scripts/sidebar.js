import noUiSlider from 'nouislider';

$(function () {
    initSortDropdown();
    initBoxes();
    initSliders();
});

function initSliders(){
    const $sliders = $('.js-slider');
    
    $sliders.each((index, slider) => {
        const min = parseFloat($(slider).data('from'));
        const max = parseFloat($(slider).data('to'));
        
        noUiSlider.create(slider, {
            start: [min, max],
            connect: true,
            range: {
                'min': min,
                'max': max
            }
        });
    });
}

function initSortDropdown() {
    const $dropdownToggle = $('#sortDropdown .dropdown-toggle');
    const $dropdownItems = $('#sortDropdown a.dropdown-item');

    $dropdownItems.click(function (event) {
        event.preventDefault();
        $dropdownToggle.html(this.innerHTML);
    });
}

function initBoxes() {
    const $boxes = $('.js-box');
    const $boxToggle = $('.js-box-toggle');
    const $boxContent = $('.js-box-content');

    $boxes.each((index, box) => {
        const $toggle = $(box).children('.js-box-toggle');
        const $content = $(box).children('.js-box-content');

        $toggle.click(function (event) {
            $content.collapse('toggle')
        })

        $content.on('hide.bs.collapse', function () {
            $(box).addClass('is--closed')
        })

        $content.on('show.bs.collapse', function () {
            $(box).removeClass('is--closed')
        })

        if ($(box).hasClass('is--closed')) {
            $content.collapse('hide')
        } else {
            $content.collapse('show')
        }
    });
}