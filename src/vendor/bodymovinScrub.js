export default function ScrubBodymovinTimeline(b) {
    var e = function() {
        function e(c) {
            a.innerHTML = parseFloat(b.currentFrame).toFixed(2)
            d = c.pageX
            f = c.pageY
            g = d / window.innerWidth * b.totalFrames
            b.goToAndStop(g, !0)
            a.style.left =
                d >= window.innerWidth - 48 ? d - 48 + 'px' : d + 'px'
            a.style.top = 20 >= f ? f + 20 + 'px' : f - 20 + 'px'
        }
        function h(c) {
            b.stop()
            b.play(0)
            a.style.display = 'block'
        }
        function k(c) {
            b.goToAndPlay(c.pageX / window.innerWidth * b.totalFrames, !0)
            a.style.display = 'none'
        }
        var a = document.createElement('div'),
            d,
            f,
            g
        a.style.width = '48px'
        a.style.height = 'auto'
        a.style.borderRadius = '10px'
        a.style.position = 'absolute'
        a.style.color = '#53A018'
        a.style.textAlign = 'center'
        a.style.userSelect = 'none'
        a.style.fontSize = '12px'
        a.style.lineHeight = '1.8'
        a.style.backgroundColor = '#262626'
        a.style.fontFamily = 'Helvetica, Arial, sans-serif'
        document.body.appendChild(a)
        document.body.onmousemove = e
        document.body.onmouseover = h
        document.body.onmouseout = k
        document.body.ondblclick = function(b) {
            document.body.onmousemove
                ? ((a.style.color = '#A31632'),
                  (document.body.onmousemove = null),
                  (document.body.onmouseover = null),
                  (document.body.onmouseout = null))
                : ((a.style.color = '#53A018'),
                  (document.body.onmousemove = e),
                  (document.body.onmouseover = h),
                  (document.body.onmouseout = k))
        }
    }
    b.isLoaded ? e() : b.addEventListener('DOMLoaded', e)
}
