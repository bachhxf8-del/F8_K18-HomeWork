const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.getElementById('list');

btn.addEventListener('click', () => {
    const liE = document.createElement("li");
    if (input.value.trim()) {
        liE.textContent = input.value;
        ul.append(liE);
    }
    input.value = '';
})

ul.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        const selectedItem = ul.querySelector(".selected")
        if(selectedItem){
            selectedItem.classList.remove("selected")
        }
        e.target.classList.add("selected")
    }
})