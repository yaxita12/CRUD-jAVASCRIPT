
const tableBody = document.getElementById('table-body');
const form = document.getElementById('crud-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

        let data = [];

    function addRow() {
    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>
                <button onclick="editRow(this)">Edit</button>
                <button onclick="deleteRow(this)">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);

        data.push({ name, email });

        nameInput.value = '';
        emailInput.value = '';
    }
}

function editRow(button) {
    const row = button.closest('tr');
    const name = row.cells[0].textContent;
    const email = row.cells[1].textContent;

    nameInput.value = name;
    emailInput.value = email;

    // Remove the edited row
    row.remove();
}

function deleteRow(button) {
    const row = button.closest('tr');
    const index = Array.from(tableBody.children).indexOf(row);

    if (index !== -1) {
        data.splice(index, 1);
        row.remove();
    }
}
