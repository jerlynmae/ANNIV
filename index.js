function showContent() {
    document.getElementById('intro').style.display = 'none'; 

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'container';

    content.innerHTML = `
        <div class="heart"></div>
        <h1 class="message">Happy Anniversary Shonget 😠 😡 😤!</h1>
       <div class="pictures">
          <img src="pic2.jpg" alt="Picture 1" class="clickable-image" onclick="openLightbox('pic2.jpg')">
          <img src="pic1.jpg" alt="Picture 2" class="clickable-image" onclick="openLightbox('pic1.jpg')">
        </div>

        <div id="lightbox" class="lightbox" onclick="closeLightbox()">
            <img id="lightbox-image" src="" alt="Zoomed Image">
        </div>
        <div class="flowers"></div>
    `;

    document.body.appendChild(content);

    growFlowers();
}

// Function to generate growing flowers
function growFlowers() {
    const flowersContainer = document.querySelector('.flowers');
    for (let i = 0; i < 10; i++) { // Create 10 flowers
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        flower.style.animationDelay = i * 0.3 + 's'; // Staggered growth animation
        flowersContainer.appendChild(flower);
    }
}

// Open the lightbox when a project image is clicked
// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = imageSrc;  // Set the image source to the clicked image's source
    lightbox.style.display = "flex";  // Display the lightbox
}

// Function to close the lightbox when the overlay is clicked
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Hide the lightbox
}



const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', showContent);

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('click', moveButton);

function moveButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.random() * (containerRect.width - buttonWidth);
    const randomY = Math.random() * (containerRect.height - buttonHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

