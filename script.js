// Add hover effects to photos
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'scale(1.05)';
        photo.style.transition = 'transform 0.3s ease';
    });

    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'scale(1)';
    });
});

// Log a message to the console when a photo is clicked
photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        console.log(`Photo ${index + 1} clicked!`);
    });
});

// Confetti effect when the heart button is clicked
function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}