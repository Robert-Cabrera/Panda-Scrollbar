
window.addEventListener('scroll', function() {
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  var panda = document.getElementById('panda');

  // Set maximum top position (70% of viewport height) This will prevent the image to go out of bounds
  var maxTop = 0.9 * window.innerHeight; 

  // This is the amount of pixels the image gets displaced from the top, changing the multiplier will increase the speed
  var newTop = 0.5 * scrollTop;
  
  // This checks if the new position of the image is too far down, and then reassigns it as the max position so it does not move
  if (newTop > maxTop) {
    newTop = maxTop;
  }

  // Set the top position of the panda
  panda.style.top = newTop + 'px';
  
});
