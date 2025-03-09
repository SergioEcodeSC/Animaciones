document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".ecoded_container");

    div.addEventListener("mousemove", (e) => {
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    div.style.setProperty("--mouse-x", `${x}px`);
    div.style.setProperty("--mouse-y", `${y}px`);
    div.style.setProperty("--spotlight-color", "rgba(255, 255, 255, 0.5)"); // Color arbitrario
    });
});