console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfo = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip');

burger.addEventListener('click', function() {
  console.log('burger clicked');
  mobileNav.style.width = '100%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '0.1';
});

closeBtn.addEventListener('click', function() {
  console.log('close button clicked');
  mobileNav.style.width = '0';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
});

moreInfo.addEventListener('mouseenter', function(event) {
  console.log('more info requested - hover');
  tooltip.style.opacity = '1';
  var x = event.pageX;     // Get the horizontal coordinate
  var y = event.pageY;     // Get the vertical coordinate
  tooltip.style.top = y + 'px';
  tooltip.style.left = x + 'px';
});


moreInfo.addEventListener('mouseleave', function(event) {
  console.log('more info no longer requested');
  tooltip.style.opacity = '0';
});

moreInfo.addEventListener('click', function(event) {
  console.log('more info requested - click');
  tooltip.style.opacity = '1';
  var x = event.pageX;     // Get the horizontal coordinate
  var y = event.pageY;     // Get the vertical coordinate
  tooltip.style.top = y + 'px';
  tooltip.style.left = x + 'px';
});
