jQuery(document).ready(function ($) {
    $('[data-slider="main-slider"]').each(function(){
      var el = $(this);

      el.find('[data-slider-slides]').slick({
          adaptiveHeight: false,
          slidesToShow: 1,
          prevArrow: el.find('[data-slider-arrow-left]'),
          nextArrow: el.find('[data-slider-arrow-right]'),
      });
    });
    $('[data-slider="second-slider"]').each(function(){
      var el = $(this);

      el.find('[data-slider-slides]').slick({
          adaptiveHeight: false,
          slidesToShow: 4,
          dots: true,
          prevArrow: el.find('[data-slider-arrow-left]'),
          nextArrow: el.find('[data-slider-arrow-right]'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows:false,
                        slidesToShow: 2
                    }
                }
            ]
      });
    });
    $('[data-slider="triple-slider"]').each(function(){
      var el = $(this);

      el.find('[data-slider-slides]').slick({
          adaptiveHeight: false,
          slidesToShow: 3,
          prevArrow: el.find('[data-slider-arrow-left]'),
          nextArrow: el.find('[data-slider-arrow-right]'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows:false,
                        slidesToShow: 1
                    }
                }
            ]
      });
    });
    $('[data-slider="testimonials-slider"]').each(function(){
        var el = $(this);

        el.find('[data-slider-slides]').slick({
            adaptiveHeight: false,
            slidesToShow: 2,
            dots: true,
          prevArrow: el.find('[data-slider-arrow-left]'),
          nextArrow: el.find('[data-slider-arrow-right]'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows:false
                    }
                },{
                    breakpoint: 768,
                    settings: {
                        arrows:false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    $('video').mediaelementplayer({
        alwaysShowControls: false,
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen'],
        success: function(mediaElement, domObject) {
            mediaElement.addEventListener('playing', function() {
                $(this).parents('[data-video-container]').find('.video-container__text').hide();
                $(this).parents('[data-video-container]').find('.mejs-controls').css("visibility", "visible");
            }, false);
            mediaElement.addEventListener('pause', function() {
                $(this).parents('[data-video-container]').find('.video-container__text').show();
            }, false);
        },
    });
});

$( function() {

    ( function( factory ) {
        if ( typeof define === "function" && define.amd ) {

            // AMD. Register as an anonymous module.
            define( [ "../widgets/datepicker" ], factory );
        } else {

            // Browser globals
            factory( jQuery.datepicker );
        }
    }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
                "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
                "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

    } ) );

    $('#datepicker').datepicker($.extend({
            inline: true
        }
    ));

    $.datepicker.setDefaults($.datepicker.regional['ru']);
} );

var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.451287, lng: 30.525360},
        zoom: 14,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: {lat: 50.451287, lng: 30.525360},
        map: map,
        icon: 'img/pin.png'
    });
};
