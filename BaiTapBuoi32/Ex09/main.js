const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const searchInput = document.getElementById('search');
const filterDone = document.getElementById('filterDone');

// Add
addBtn.addEventListener('click', () => {
    if (input.value.trim()) {
        const li = document.createElement('li');

        const text = document.createElement('span');
        text.textContent = input.value;

        const actions = document.createElement('div');
        actions.classList.add('actions');

        // done button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = "Done";
        doneBtn.classList.add('done-btn');

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');

        actions.append(doneBtn, deleteBtn);
        li.append(text, actions);
        list.append(li);
    }

    input.value = "";
});

// Click events (done + delete)
list.addEventListener('click', (e) => {
    // Done
    if (e.target.classList.contains('done-btn')) {
        e.target.classList.toggle('active');
    }

    // Delete
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('li').remove();
    }
});

// Search
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const items = list.querySelectorAll('li');

    items.forEach(li => {
        const text = li.querySelector('span').textContent.toLowerCase();

        if (text.includes(keyword)) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
});

// Filter done
filterDone.addEventListener('change', () => {
    const items = list.querySelectorAll('li');

    items.forEach(li => {
        const doneBtn = li.querySelector('.done-btn');

        if (filterDone.checked) {
            // Only show items that have been done.
            if (doneBtn.classList.contains('active')) {
                li.style.display = "flex";
            } else {
                li.style.display = "none";
            }
        } else {
            // show all
            li.style.display = "flex";
        }
    });
});