(function($){
	
	
	$(".menupage ul:first").attr('id', 'menuV2'); // menu de gauche
    $(".menupage ul ul").addClass('sub');


})(jQuery);


var alignWithMainMenu = false;

/* Vertical Menu - Developed by http://www.MenuCool.com/vertical/vertical-menu. Retaining this comment is required.*/
function initmenu() {
    var e = document.getElementById("menuV2"),
        i = e.offsetHeight,
        b = e.getElementsByTagName("ul"),
        g = /msie|MSIE 6/.test(navigator.userAgent);
    if (g)
        for (var h = e.getElementsByTagName("li"), a = 0, j = h.length; a < j; a++) {
            h[a].onmouseover = function() {
                this.className = "onhover"
            };
            h[a].onmouseout = function() {
                this.className = ""
            }
        }
    for (var a = 0; a < b.length; a++) {
        var c = b[a].parentNode;
        c.getElementsByTagName("a")[0].className += " arrow";
        b[a].style.left = c.offsetWidth + "px";
        b[a].style.top = c.offsetTop + "px";
        if (alignWithMainMenu) {
            var d = getParentOffsetRoot(c.parentNode, 0);
            if (b[a].offsetTop + b[a].offsetHeight + d > i) {
                var f;
                if (b[a].offsetHeight > i) f = -d;
                else f = i - b[a].offsetHeight - d;
                b[a].style.top = f + "px"
            }
        }
        c.onmouseover = function() {
            if (g) this.className = "onhover";
            var a = this.getElementsByTagName("ul")[0];
            if (a) {
                a.style.visibility = "visible";
                a.style.display = "block"
            }
        };
        c.onmouseout = function() {
            if (g) this.className = "";
            this.getElementsByTagName("ul")[0].style.visibility = "hidden";
            this.getElementsByTagName("ul")[0].style.display = "none"
        }
    }
    for (var a = b.length - 1; a > -1; a--) b[a].style.display = "none"
}

function getParentOffsetRoot(a, b) {
    if (a.id == "menuV2") return b;
    else {
        b += a.offsetTop;
        return getParentOffsetRoot(a.parentNode.parentNode, b)
    }
}
if (window.addEventListener) window.addEventListener("load", initmenu, false);
else window.attachEvent && window.attachEvent("onload", initmenu)
