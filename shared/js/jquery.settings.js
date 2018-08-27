/*
Waypoints
http://imakewebthings.com/waypoints/
*/

$(function () {
    var $stucky_element = $('#js-sticky');
    $stucky_element.waypoint({
        handler: function (direction) {
            $stucky_element.toggleClass('stuck');
            if (direction == 'up') {　//スクロールが上方の場合実行

                $stucky_element.toggleClass('stuck2');

            }// if end
        }
    });
});