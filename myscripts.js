document.addEventListener("DOMContentLoaded", function() {
  const galleryWrapper = document.querySelector('.gallery-wrapper');
  
  if (galleryWrapper) {
      for (let i = 1; i <= 10; i++) {
          const img = document.createElement('img');
          img.src = `images/rainier${i}.jpg`;  // 
          img.alt = `Rainier Image ${i} by Lily M. Tang`;
          img.style.width = "100%";
          img.style.height = "auto";
          galleryWrapper.appendChild(img);
          
      }
  } else {
      console.error("Gallery wrapper not found.");
  }
// scroll every 3 seconds
let currentIndex = 0;
    const totalImages = 10;
    
    function scrollGallery() {
        currentIndex = (currentIndex + 1) % totalImages;
        galleryWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(scrollGallery, 3000);
});