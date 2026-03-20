const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
    const li = document.createElement("li");
    if (input.value) {
        li.textContent = input.value;
        list.append(li);
    }
    input.value = '';
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("red");
    }
})