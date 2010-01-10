var r = /\?*utm_source=.*/i;
var url = document.location.href;
if (url.match(r)) {
  location.href = url.replace(r, '');
}