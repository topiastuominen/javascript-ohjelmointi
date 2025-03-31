
// Auto-luokan määrittely
class Auto {
  constructor(regNumber, manufacturer, model, owner, price, color) {
    this.regNumber = regNumber;
    this.manufacturer = manufacturer;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}


// Auto-olioiden tallentamiseen käytettävä taulukko
const cars = [];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Collect form data
  const regNumber = document.getElementById("regNumber").value;
  const manufacturer = document.getElementById("manufacturer").value;
  const model = document.getElementById("model").value;
  const owner = document.getElementById("owner").value;
  const price = document.getElementById("price").value;
  const color = document.getElementById("color").value;

  // Create a new Auto object
  const newCar = new Auto(regNumber, manufacturer, model, owner, price, color);

  // Add the new car to the array
  cars.push(newCar);

  // Update the car table
  updateCarTable();

  // Clear the form
  event.target.reset();
}

// Function to update the car table
function updateCarTable() {
  const tableBody = document.getElementById("carTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  cars.forEach((car) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${car.regNumber}</td>
      <td>${car.manufacturer}</td>
      <td>${car.model}</td>
      <td>${car.owner}</td>
      <td>${car.price}</td>
      <td>${car.color}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Function to search for a car by registration number
function searchCar() {
  const searchInput = document.getElementById("searchInput").value;
  const resultDiv = document.getElementById("searchResult");

  try {
    const foundCar = cars.find((car) => car.regNumber === searchInput);

    if (foundCar) {
      resultDiv.textContent = `Found: ${foundCar.manufacturer} ${foundCar.model}, Owner: ${foundCar.owner}`;
    } else {
      resultDiv.textContent = "No car found with the given registration number.";
    }
  } catch (error) {
    resultDiv.textContent = "An error occurred during the search.";
  }
}




document.getElementById("carForm").addEventListener("submit", handleFormSubmit);
document.getElementById("searchButton").addEventListener("click", searchCar);