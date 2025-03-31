document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.querySelector('#inputField');
    const displayText = document.querySelector('#displayText');
});
    
inputField.addEventListener('input', () => {
        displayText.textContent = inputField.value;
    
});