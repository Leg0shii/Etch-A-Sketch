const borderSize = 1;
const fieldsize = 500;

function main() {
    loadGrid(16);
    registerLoadButton();
}

function registerLoadButton() {
    const loadButton = document.getElementById('grid-loader');
    loadButton.addEventListener('click', () => {
        let value = prompt("Enter your grid size!");
        if (value > 100) value = 16;
        if (value) value = 16;
        loadGrid(value);
    });
}

function registerPixelHover(pixel) {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('pixel-hover');
    });
}

function loadGrid(size) {
    const pixelContainer = document.querySelector('.pixel-container');
    pixelContainer.innerHTML = "";
    const pixelSize = (fieldsize - 2 * borderSize * size) / size;
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            pixelDiv.style.height = pixelSize + 'px';
            pixelDiv.style.width = pixelSize + 'px';
            pixelDiv.x = x;
            pixelDiv.y = y;
            pixelContainer.appendChild(pixelDiv);
            registerPixelHover(pixelDiv);
        }
    }
}