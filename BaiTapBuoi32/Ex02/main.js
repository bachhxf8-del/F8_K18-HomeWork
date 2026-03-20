const btn = document.getElementById('btn');
const list = document.getElementById('list');
let cnt = 1;
btn.addEventListener('click', () => {
    const liE = document.createElement('li');
    liE.textContent = `Item ${cnt}`;
    list.appendChild(liE);
    cnt++;
})