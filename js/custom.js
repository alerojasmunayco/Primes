$(document).ready(function () {

    var windowHeight = $(window).height() - 180;
    var href = "";
    var currentNav = "";
    url = document.location.toString();
    heightWindow = $(window).height();


    $(".nav > li > a").click(function (e) {
        var href = $(this).attr("href");

        if (href != "#") {
            return scrollAnimate(href);
        }
    });


    function scrollAnimate(href) {
        var element = $(href);
        if (element.length > 0) {
            var position = element.offset().top - 70;


            $("html, body").animate({
                scrollTop: position
            }, 700);

            if ($(window).width() < 616) {
                $('.navbar-collapse').animate({
                    height: '1px'
                }, 'fast', function () {
                    $(this).removeClass('in');
                });
            }

            return false;
        } else {
            location.href = "/" + href;
        }
    }

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.menu-top').addClass('menu-shrink');
    } else {
        $('.menu-top').removeClass('menu-shrink');
    }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
//portfolio
$(window).load(function(){
    $portfolio_selectors = $('.portfolio-filter >li>a');
    if($portfolio_selectors!='undefined'){
        $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector : 'li',
            layoutMode : 'fitRows'
        });
        $portfolio_selectors.on('click', function(){
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    }
});

