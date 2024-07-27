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

function updateImageSrc() {
    const dividerImg = document.getElementById('divider');

    const smallImageSrc = "images/pattern-divider-mobile.svg"; // Path to the smaller image
    const largeImageSrc = "images/pattern-divider-desktop.svg"; // Path to the larger image

    if (window.innerWidth < 600) {
        dividerImg.src = smallImageSrc;
    } else {
        dividerImg.src = largeImageSrc;
    }
}

// Initial check
updateImageSrc();

// Update image source on window resize
window.addEventListener('resize', updateImageSrc);