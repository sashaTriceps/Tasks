function display_random_image() {
  var Images = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];

    var i = Math.floor(Math.random() * Images.length);

    img = document.createElement('img');
    img.src = Images[i].src;
    img.width = Images[i].width;
    img.height = Images[i].height;

    document.body.appendChild(img);
}
