var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }
  

TweenMax.set('svg', {
  visibility: 'visible'
})
TweenLite.defaultEase = Linear.easeNone;

var tl = new TimelineMax( {repeat: -1, yoyo: true}).timeScale(1);
tl.to('.reelL', 4, {
 strokeWidth: 5,
 attr: {
  r:31
 }
})
.to('.reelR', 4, {
 strokeWidth: 39,
 attr: {
  r:48
 }
}, 0)
.to('.tapeL', 4, {
 attr: {
  x2:'+=36'
 }
}, 0)
.to('.tapeR', 4, {
 attr: {
  x2:'+=35.5'
 }
}, 0)
.to('.centerReel', 4, {
 rotation: '-=1440',
 transformOrigin: '50% 50%'
}, 0)

//ScrubGSAPTimeline(tl);

