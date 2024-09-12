// Select all calculator keys
const keys = document.querySelectorAll('.calc-key');

// Create a new Audio object for the click sound
const clickSound = new Audio('mixkit-camera-shutter-click-1133.wav'); // Make sure the path to the file is correct

keys.forEach(key => {
  key.addEventListener('click', () => {
    // Play the click sound
    clickSound.play();

    // Add the animation class
    key.classList.add('animate');
    
    // Remove the animation class after the animation ends
    setTimeout(() => {
      key.classList.remove('animate');
    }, 300); // Match this with your animation duration
  });
});
