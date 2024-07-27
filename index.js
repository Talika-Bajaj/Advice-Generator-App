const adviceId = document.querySelector('.advice-id');
const showAdvice = document.querySelector('.show-advice');
const generateAdvice = document.getElementById('btn');

async function getAdvice(params) {
    adviceId.innerHTML = '';
    showAdvice.innerHTML = '';

    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    console.log(data.slip);
    let displayData = data.slip;

    adviceId.textContent = displayData.id;
    showAdvice.textContent = `"${displayData.advice}"`;
}

generateAdvice.addEventListener('click', () => {
    getAdvice();
})