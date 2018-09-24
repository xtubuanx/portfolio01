/*
Waypoints
http://imakewebthings.com/waypoints/
*/
$(function () {
    var sticky_element_pc = $('#js-sticky-pc');//PCのとき固定する要素
    var waypoint_element = $('#js-waypoint');//Waypointの発火点
    var sticky_element_sp = $('#js-sticky-sp');//スマホのとき固定する要素
    var navigation_sp = $('#js-toggle-item');//スマホの展開したナビゲーション
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
            navigation_sp.addClass('sticky');
        } else {　//スクロールが上方の場合実行
            //clone_sticky_element_pc.addClass('sticky-end');
            clone_sticky_element_pc.removeClass('sticky');
            sticky_element_sp.removeClass('sticky');
            navigation_sp.removeClass('sticky');
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
    arrows: false
});


$('#js-slider-recommend').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 575,
            settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
});

function slider_instagram(){
    $('#js-slider-instagram').slick({
    dots: true,
    arrows: false,
    //mobileFirst: true,
    //slidesToShow: 6,
    //slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
});
}


var bp = [{breakpoint: 992, settings: "unslick"}];

function sliderSetting(){
    var width = $(window).width();
    if(width <= 767){
        slider_instagram();
    }
}

// 初期表示時の実行
sliderSetting();

// リサイズ時の実行
$(window).resize( function() {
    sliderSetting();
});


//////////////////
/*
言語選択
*/

$(function () {
    $('.js-country').on('click', function () {
        $(this).parent().toggleClass('is-open is-close');
        $(this).next().slideToggle('fast').toggleClass('is-open');
    });
});
