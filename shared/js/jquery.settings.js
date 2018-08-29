/*
Waypoints
http://imakewebthings.com/waypoints/
*/
$(function () {
    var clone_element = $('#js-sticky');
    //固定ナビゲーションを複製
    clone_element.clone()
        .insertAfter(clone_element)
        .addClass('sticky-clone')
        .removeAttr('id');
    //Waypoints
    clone_element.waypoint(function (direction) {
        var  sticky_element = $('.sticky-clone');
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
グローバルナビのドロップダウン
*/

$(function () {


});

//////////////////