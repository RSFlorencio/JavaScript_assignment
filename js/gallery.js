document.addEventListener("DOMContentLoaded", function() {
  // Get all thumbnails
  var thumbnails = document.querySelectorAll("#gallery ul li img");

  // Get the featured image
  var featuredImage = document.querySelector("#gallery figure img");

  // Add click event to each thumbnail
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Get the full-sized image path from the src attribute of the thumbnail
      var fullsizeImagePath = thumbnail.src.replace("-small", "-large");

      // Set the full-sized image path to the featured image
      featuredImage.src = fullsizeImagePath;
      featuredImage.alt = thumbnail.alt;
    });
  });
});
