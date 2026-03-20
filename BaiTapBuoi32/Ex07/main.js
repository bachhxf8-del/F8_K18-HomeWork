const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.getElementById('list');

btn.addEventListener('click', () => {
    if (input.value.trim()) {
        const liE = document.createElement("li");
        const content = document.createElement("span");
        content.textContent = input.value;

        const close = document.createElement("span");
        close.textContent = "X";
        close.classList.add("close-btn");
        liE.append(content, close);
        ul.append(liE);
    }
    input.value = "";
})

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
        return;
    }

    if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("completed");
    }

})
