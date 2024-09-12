const keys = document.querySelectorAll('.calc-key');
const clickSound = new Audio('mixkit-camera-shutter-click-1133.wav');


keys.forEach(key => {
  key.addEventListener('click', () => {
    key.classList.add('animate');
    clickSound.play();

    // Remove the animation class after the animation ends
    setTimeout(() => {
      key.classList.remove('animate');
    }, 300); // Match this with your animation duration
  });
});
