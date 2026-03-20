const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
    const value = input.value;
    if (value.trim() === "") return;
    const liE = document.createElement('li');
    liE.textContent = value;
    list.appendChild(liE);
    input.value = '';
})