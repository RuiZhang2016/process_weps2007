// see: http://wiki.sparta.cnet.com/cnet/twiki/bin/view/Gamespot/DevRapper
function toggle(el) {
  el = $(el);
  if (el.style.display == 'none') el.style.display = '';
  else el.style.display = 'none';
}
function fadeOut(el, fadeTimeInSeconds) {
  fade(el, fadeTimeInSeconds);
}
function fadeIn(el, fadeTimeInSeconds) {
  fade(el, fadeTimeInSeconds, true);
}
function foldDown(el, timeInSeconds, heightInPixels) {
  fold(el, {time: timeInSeconds, height: heightInPixels, down: true});
}
function foldUp(el, timeInSeconds, heightInPixels) {
  fold(el, {time: timeInSeconds, height: heightInPixels, down: false});
}
function foldToggle(el, timeInSeconds, heightInPixels) {
  fold(el, {time: timeInSeconds, height: heightInPixels, toggle: true});
}
function doAjax(url, form, onUpdate, onComplete) {
  if (supportsAjax()) {
    new ajax (url, {postBody: $F(form), update: onUpdate, onComplete: onComplete});
    return true;
  } else {
    var form=$(form);form.action = url;form.method = 'POST';form.submit();return false;
  }
}
function supportsAjax() {
  if (window.ActiveXObject) return true;
  else if (window.XMLHttpRequest) return true;
  else return false;
}
function $F(form) {
  return Form.serialize(form);
}
function $f(el) {
  return Form.Element.serialize(el);
}
function delay(func, time) {
  time = time < 20 ? time * 1000 : time;
  setTimeout(func.bind(this), time);
}
function onLoad(func) {
  addEvent(window, 'load', func);
}
function zoomIfMsft(el, on) {
  el = $(el);
  if(/MSIE/.test(navigator.userAgent) && (!el.hasLayout)) Element.setStyle(el, {zoom: (on ? 1 : 0)});
}
function getHeight(el) {
  var el = $(el);
  var height = el.style.height.replace(/px/,'');
  if (height) return parseInt(height);
  else return parseInt(el.offsetHeight);
}
function getElHeight(el) {
  var height;
  if (el.offsetHeight > 0) {
    height = el.offsetHeight
  } else {
    el.style.height = 'auto'
    el.style.display = 'block'
    height = el.offsetHeight
    el.style.display = 'none'
  }
  return height
}
function fade(el, time, fadeIn) {
  fadeIn = fadeIn ? true : false;
  time = time ? time * 1000 : 500;
  zoomIfMsft(el, true);
  el = $(el);
  fdr = new fx.Opacity(el, { duration: time } );
  if (fadeIn == true) {
    fdr.now = 0;
    el.style.visibility = 'hidden';
    el.style.display = '';
  }
  fdr.toggle();
  delay(function() { zoomIfMsft(el, false); }, time);
}
function fold(el, options) {
  el = $(el);
  down = options.down ? true : false;
  time = options.time ? options.time : 250;
  time = time < 20 ? time * 1000 : time;
  elht = getHeight(el);
  if (options.toggle) {
    var mkey = 'ht' + el.id;
    window[mkey] ? elht = window[mkey] : window[mkey] = elht;
    down = (el.style.display=='none') ? true : false;
  }
  var height = (typeof(options.height) == 'undefined') ? elht : options.height;
  height = parseInt(height);
  el.style.height = down ? 0 + 'px' : height + 'px';
  if (el.style.display == 'none') el.style.display = '';
  var effect = new fx.Height(el, {duration: time});
  var start = down ? 0 : height;
  var end   = down ? height : 0;
  effect.custom(start, end);
  if (!down) delay(function() { el.style.display = 'none' }, time);
}

// By John Resig http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
function addEvent( obj, type, fn )
{
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent)
	{
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}
