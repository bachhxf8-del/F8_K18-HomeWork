const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
    const liE = document.createElement("li");
    if (input.value.trim()) {
        liE.textContent = input.value;
        list.append(liE);
    }
    input.value = '';
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("red");
    }
})