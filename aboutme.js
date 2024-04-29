let currentPainel = 1;
let painelWidth = 400; 
const totalPainels = 4;

function updatePanelWidth() {
    if (window.matchMedia("(max-width: 720px)").matches) {
        painelWidth = 300;
    } else {
        painelWidth = 400;
    }
}

function changePanel(direction) {
    currentPainel += direction;

    if (currentPainel < 1) {
        currentPainel = totalPainels;
    } else if (currentPainel > totalPainels) {
        currentPainel = 1;
    }

    updateCarousel();
}

function updateCarousel() {
    updatePanelWidth(); 
    const carrossel = document.getElementById('carrossel');
    const painelContainer = document.querySelector('.carrossel_conteudo');
    const translateValue = -painelWidth * (currentPainel - 1);
    carrossel.style.transform = `translateX(${translateValue}px)`;
    painelContainer.style.width = `${painelWidth}px`;
}

updateCarousel();


const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
});