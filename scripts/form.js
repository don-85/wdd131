
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
