var winHeight = window.innerHeight;
var animDuration = winHeight * 4;
var animationData;

animationData = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

var animData = {
  container: document.getElementById('container'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: animationData,
};

var anim = bodymovin.loadAnimation(animData);
window.addEventListener('scroll', function() {
  animatebodymovin(animDuration, anim);
});

function animatebodymovin(duration, animObject) {
  var scrollPosition = window.scrollY;
  var maxFrames = animObject.totalFrames;
  var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
  animObject.goToAndStop(frame, true);
}

function loadJSON(json) {   

var json = require('./data.json'); 
}