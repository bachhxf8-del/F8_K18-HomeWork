const btn = document.querySelector('#btn');
const content = document.querySelector('#content');

btn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = "Hello DOM";
    content.appendChild(p);
})

