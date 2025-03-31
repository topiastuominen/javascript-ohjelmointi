
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('addFruitBtn').addEventListener('click', function() {
  
      const fruitInput = document.getElementById('fruitInput');
  
      const fruitList = document.getElementById('fruitList');
  
      const newFruit = document.createElement('li');
  
      newFruit.textContent = fruitInput.value;
  
      fruitList.appendChild(newFruit);
  
      fruitInput.value = '';
  
    });
  
  });
  
  
