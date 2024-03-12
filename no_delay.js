function no_delay(imageUrl) {
  var image = new Image();
  image.src = imageUrl;
  image.onload = function() {
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
  };
}


