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

get ("example/data.txt")
  .then(function(text) {
    console.log("data.txt:" + text);
  },function(error) {
    console.log("Failed to fetch data.txt: " + error) ;
  });