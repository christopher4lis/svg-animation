import bodymovin from 'bodymovin'
import ScrubBodymovinTimeline from './vendor/bodymovinScrub.js'
import './animation.json'

// Utils
function select(el) {
    return document.querySelector(el)
}

function selectAll(el) {
    return document.querySelectorAll(el)
}

// Initialization
let anim

const animationWindow = select('#animationWindow')
const animData = {
    wrapper: animationWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: './json/animation.json',
    rendererSettings: {
        //context: canvasContext, // the canvas context
        //scaleMode: 'noScale',
        //clearCanvas: false,
        //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    }
}

anim = bodymovin.loadAnimation(animData)
anim.addEventListener('DOMLoaded', onDOMLoaded)
anim.setSpeed(1)
bodymovin.setSubframeRendering(true)
console.log(anim)

function onDOMLoaded() {
    anim.addEventListener('complete', function() {})
}

ScrubBodymovinTimeline(anim)
