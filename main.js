const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.getElementById('generate-btn');

function generateLottoNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = getRandomColor();
        numbersContainer.appendChild(numberDiv);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener('click', generateLottoNumbers);

// Generate numbers on initial load
generateLottoNumbers();
