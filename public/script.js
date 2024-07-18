document.addEventListener("DOMContentLoaded", () => {
    const dodgeButton = document.getElementById("dodge-button");

    dodgeButton.addEventListener("mouseover", (event) => {
        const rect = dodgeButton.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        // Generate random movement distances
        const moveX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 300);
        const moveY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 200);

        dodgeButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    dodgeButton.addEventListener("mouseout", () => {
        setTimeout(() => {
            dodgeButton.style.transform = 'translate(0, 0)';
        }, 500); // 1-second delay
    });
});
