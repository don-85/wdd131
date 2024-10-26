
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


function populateProductDropdown() {
  
  const selectElement = document.getElementById('product-name');

 
  if (!selectElement) {
    console.error('Product select element not found!');
    return;
  }

 
  selectElement.innerHTML = '';

 
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Choose a Product...';
  defaultOption.value = '';
  selectElement.appendChild(defaultOption);

 
  products.forEach(product => {
   
    const option = document.createElement('option');
    option.value = product.id;  
    option.textContent = product.name;

   
    selectElement.appendChild(option);
  });
}


window.onload = populateProductDropdown;


document.addEventListener('DOMContentLoaded', () => {
  loadFormData(); 

  const form = document.querySelector('form');
  form.addEventListener('submit', saveFormData); 
});

function saveFormData(event) {
  event.preventDefault(); 

  const formData = {
    productName: document.getElementById('product-name').value,
    rating: document.querySelector('input[name="rating"]:checked')?.value || "",
    dateInstalled: document.getElementById('date-installed').value,
    features: Array.from(document.querySelectorAll('input[name="feature"]:checked')).map(feature => feature.value),
    review: document.getElementById('review').value,
    reviewerName: document.getElementById('reviewer-name').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData)); 
  alert('Your review has been saved locally!');
  form.reset(); 
}

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem('formData'));

  if (savedData) {
    document.getElementById('product-name').value = savedData.productName;
    if (savedData.rating) {
      document.getElementById(`rating-${savedData.rating}`).checked = true;
    }
    document.getElementById('date-installed').value = savedData.dateInstalled;

    savedData.features.forEach(feature => {
      const checkbox = document.querySelector(`input[name="feature"][value="${feature}"]`);
      if (checkbox) checkbox.checked = true;
    });

    document.getElementById('review').value = savedData.review;
    document.getElementById('reviewer-name').value = savedData.reviewerName;
  }
}