// Select all calculator keys
const keys = document.querySelectorAll('.calc-key');

// Create a new Audio object for the click sound
const clickSound = new Audio('./sound/mixkit-camera-shutter-click-1133.wav'); // Make sure the path to the file is correct

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


function calculate() {
  let display = document.querySelector('input[name="display"]');
  try {
      // Replace any 'x' (multiplication sign) with '*' for evaluation
      display.value = display.value.replace(/x/g, '*');
      
      // Evaluate the expression using eval()
      display.value = eval(display.value);
  } catch (e) {
      display.value = "Error";
  }
}


const equalButton = document.querySelector('#equal');
const resultSound = new Audio('./sound/mixkit-game-click-1114.wav');



equalButton.addEventListener('click',() =>{
  resultSound.play();


  calculate();
});

