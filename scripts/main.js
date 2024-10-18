// Form validation and storing in localStorage
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Capture form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Save form data to localStorage
  localStorage.setItem('contactData', JSON.stringify({ name, email, message }));

  // Display success message
  alert('Form submitted successfully!');
});

// Dynamic content based on localStorage data
window.onload = function () {
  if (localStorage.getItem('contactData')) {
    const contactData = JSON.parse(localStorage.getItem('contactData'));
    console.log('Previous contact data found: ', contactData);
  }
};

// Simple example of DOM interaction and conditional branching
document.addEventListener('DOMContentLoaded', () => {
  const featuresSection = document.querySelector('.features');
  const features = ['Feature 1', 'Feature 2', 'Feature 3'];

  if (features.length > 0) {
    features.forEach(feature => {
      const listItem = document.createElement('li');
      listItem.textContent = feature;
      featuresSection.appendChild(listItem);
    });
  }
});
