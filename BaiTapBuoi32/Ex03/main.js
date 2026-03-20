const input = document.getElementById('input');
const btn = document.getElementById("btn");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
    const value = input.value;
    if(value.trim() === "") return;
    const p = document.createElement("p");
    p.textContent = value;
    content.appendChild(p);
    input.value = "";
})