function getUrlProp(url) {
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    protocol: a.protocol,
    search: a.search,
    path: a.pathname,
    origin: a.origin,
    host: a.hostname,
    hash: a.hash
  };
}

console.log(getUrlProp('http://example.com/page/12?show=1#12'));


// location.href;     // http://example.com/page/12?show=1#12
// location.pathname; // /page/12/
// location.host;     // example.com
// location.hostname; // example.com
// location.hash;     // #id12
// location.origin;   // http://example.com/
// location.protocol; // http:
// location.search;   // ?id=test
