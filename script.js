document.getElementById('biden-image').addEventListener('click', function() {
    const container = document.getElementById('mini-photos-container');
    container.innerHTML = ''; // Clear previous mini photos

    for (let i = 0; i < 10; i++) { // Create 10 mini photos
        const miniPhoto = document.createElement('img');
        miniPhoto.src = 'joe-biden.png';
        miniPhoto.className = 'mini-photo';
        miniPhoto.style.left = `${Math.random() * 100}%`;
        miniPhoto.style.top = `${Math.random() * 100}%`;
        miniPhoto.style.opacity = '1'; // Ensure initial opacity is set to 1
        container.appendChild(miniPhoto);

        // Trigger animation
        setTimeout(() => {
            miniPhoto.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5)`;
            miniPhoto.style.opacity = '0'; // Fade out
        }, 0);
    }

    // Add bounce effect to the "NO" text
    const noText = document.querySelector('h1');
    noText.classList.add('bounce');

    // Remove the bounce class after the animation ends
    noText.addEventListener('animationend', function() {
        noText.classList.remove('bounce');
    }, { once: true });
});