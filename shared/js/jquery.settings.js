/*
Waypoints
http://imakewebthings.com/waypoints/
*/
$(function () {
    var sticky_element_pc = $('#js-sticky-pc');//PCのとき固定する要素
    var waypoint_element = $('#js-waypoint');//Waypointの発火点
    var sticky_element_sp = $('#js-sticky-sp');//スマホのとき固定する要素
    //固定ナビゲーションを複製
    sticky_element_pc.clone()
        .insertAfter(sticky_element_pc)
        .addClass('sticky-clone')
        .removeAttr('id');
    //PCのとき
    waypoint_element.waypoint(function (direction) {
        var clone_sticky_element_pc = $('.sticky-clone');
        if (direction == 'down') {　//スクロールが下方の場合実行
            //clone_sticky_element_pc.removeClass('sticky-end');
            clone_sticky_element_pc.addClass('sticky');
            sticky_element_sp.addClass('sticky');
        } else {　//スクロールが上方の場合実行
            //clone_sticky_element_pc.addClass('sticky-end');
            clone_sticky_element_pc.removeClass('sticky');
            sticky_element_sp.removeClass('sticky');
        }// if end
    });
});

//////////////////
/*
スマホのトグルナビゲーション
*/

$(function () {
    $('#js-toggle-button').on('click', function () {
        $(this).toggleClass('is-open');
        $('body').toggleClass('is-fixed');
        $('#js-toggle-item').slideToggle('fast').toggleClass('is-open');
    });
});

//////////////////
/*
ページトップボタン（フェードイン）
*/
$(function () {
    var topBtn = $('#js-pagetop');
    var footer = $('.p-footer');
    // フッターの高さ
    footHeight = footer.height();

    $(window).scroll(function () {

        // ドキュメントの高さ
        scrollHeight = $(document).height();
        // ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
        scrollPosition = $(this).height() + $(this).scrollTop();

        // スクロール位置が100pxを超えたら
        if ($(this).scrollTop() > 100) {
            topBtn.animate({opacity: '1'}, 50);
        }
        else {
            topBtn.animate({opacity: '0'}, 50);
        }

        // スクロール位置がフッターまで来たら
        if (scrollHeight - scrollPosition <= footHeight) {
            topBtn.addClass('is-fixed');
        }
        else {
            topBtn.removeClass('is-fixed');
        }


    });
});

//////////////////
/*
スムーススクロール（ヘッダー固定のアンカーリンクのずれ解消）
*/

$(function () {
    var headerHight = 60; //ヘッダの高さ
    $('a[href^="#"]:not(a.js-noScroll)').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
        $('html, body').animate({
            scrollTop: position
        }, 550, 'swing');
        return false;
    });
});


//////////////////
/*
slick.js
*/
$('#js-slider-visual').slick({
    dots: true,
    arrows: false,
});
$('#js-slider-instagram').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1024,
            /*
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                //unslick: "true"
            }*/
            settings: 'unslick'
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



//////////////////
/*
bxslider
*/
//
// jQuery(document).ready(function($){
//     // $('#js-slider-visual').bxSlider({
//     //     infiniteLoop: true,
//     //     controls: false
//     // });
//     $('#js-slider-instagram').bxSlider({
//         useCSS: false,
//         preventDefaultSwipeY: false,
//         responsive: true,
//         minSlides: 5,
//         maxSlides: 6,
//         slideWidth: 100,
//         moveSlides: 6
//     });
// });
// // $(function () {
// //     $('#js-slider-instagram > .p-instagram-grid').bxSlider({
// //         infiniteLoop: true,
// //         controls: false,
// //         responsive: true,
// //         minSlides: 5,
// //         maxSlides: 5,
// //         moveSlides: 5,
// //         slideWidth: 100,
// //         slideMargin: 10
// //         //slideSelector: '#js-slider-visual',
// //     });
// //
// // });
