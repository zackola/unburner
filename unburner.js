var r = /(^http.*)(\?+utm_source=feedburner[^#]*)(#?.*)/ig;
var url = document.location.href;
var matches = r.exec(url);
var new_url = matches[1] + matches[3];
document.location.href = new_url;