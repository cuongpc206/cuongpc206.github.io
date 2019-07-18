$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            
        }
    })
});

// giỏ hàng

$(document).ready(function() {
    $('#btn').click(function() {
        $('#btn').toggleClass("cart_clk");

    });
    $("#btn").one("click", function() {
        $('.cart .fa').attr('data-before', '1');
    });

    var prnum = $('.num').text();
    $('.inc').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num').text(prnum);
            $('.cart .fa').attr('data-before', prnum);
        }

    });
    $('.dec').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num').text(prnum);
            $('.cart .fa').attr('data-before', prnum);
        }

    });

});

// mua ngay

$(document).ready(function() {
    $('#btn1').click(function() {
        $('#btn1').toggleClass("cart_clk1");

    });
    $("#btn1").one("click1", function() {
        $('.cart1 .fa1').attr('data-before1', '1');
    });

    var prnum = $('.num1').text();
    $('.inc1').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num1').text(prnum);
            $('.cart1 .fa1').attr('data-before1', prnum);
        }

    });
    $('.dec1').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num1').text(prnum);
            $('.cart1 .fa1').attr('data-before1', prnum);
        }

    });

});