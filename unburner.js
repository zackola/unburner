var r = /\?*utm_source=feedburner.*/i;
var url = document.location.href;
if (url.match(r)) {
  location.href = url.replace(r, '');
}