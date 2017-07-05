function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
      if (req.status < 400)
        succeed(req.responseText)
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}

get('http://marijnhaverbeke.nl')
	.then
		(function() {
			let href = '';
  			for (let i = 0; i < document.links.length; i++) {
            	href = document.links[i].href;
              get(href)
                .then
                  (function() {
                    let elems = document.getElementsByTagName('p');
                    let string = '';
                    for (let i = 0; i < elems.length; i++) {
                      string += elems[i].slice();
                    }
                    if (string.search(/Piranha/i) !== -1) {
                      console.log(href);
                    }
                  })
            }
		});