let currentDate = new Date().toLocaleString();
document.getElementById("currentyear").textContent = currentDate;

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  localStorage.setItem('contactData', JSON.stringify({ name, email, message }));


  alert('Form submitted successfully!');
});


window.onload = function () {
  if (localStorage.getItem('contactData')) {
    const contactData = JSON.parse(localStorage.getItem('contactData'));
    console.log('Previous contact data found: ', contactData);
  }
};


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
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  localStorage.setItem('contactData', JSON.stringify({ name, email, message }));

 
  alert('Form submitted successfully!');
});


window.onload = function () {
  if (localStorage.getItem('contactData')) {
      const contactData = JSON.parse(localStorage.getItem('contactData'));
      console.log('Previous contact data found: ', contactData);
  }
};
