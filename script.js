var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");
for (var i = 1; i <= 10; i++) {
    var thumb = document.createElement("img");
    thumb.src = "images/tapthe_images_page1/image" + i + ".jpeg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        }
    );
}