/*
Waypoints
http://imakewebthings.com/waypoints/
*/
$(function () {
    var clone_element = $('#js-sticky');//固定する要素
    var waypoint_element = $('#js-waypoint');//Waypointの発火点
    //固定ナビゲーションを複製
    clone_element.clone()
        .insertAfter(clone_element)
        .addClass('sticky-clone')
        .removeAttr('id');
    //Waypoints
    waypoint_element.waypoint(function (direction) {
        var sticky_element = $('.sticky-clone');
        if (direction == 'down') {　//スクロールが下方の場合実行
            sticky_element.removeClass('sticky-end');
            sticky_element.addClass('sticky');
        } else {　//スクロールが上方の場合実行
            sticky_element.addClass('sticky-end');
            sticky_element.removeClass('sticky');
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
            topBtn.animate( { opacity: '1' }, 50 ).addClass('is-show');
        }
        else {
            topBtn.animate( { opacity: '0' }, 50 );
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

