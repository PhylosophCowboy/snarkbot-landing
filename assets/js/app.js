// Latest version of assets/js/app.js with new console.log statements for debugging button functionality

// Example content with console.log for debugging
console.log('Debug: Button functionality script loaded');

// Your actual app.js content should be here
// ...

// Example button event listener with debug logs
const button = document.querySelector('button');
if(button) {
  button.addEventListener('click', () => {
    console.log('Button clicked');
    // Additional button functionality
  });
} else {
  console.log('Button not found');
}
