function updateClock() {  
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
}
);

