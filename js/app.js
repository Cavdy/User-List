// Define UI's Variables
const form = document.querySelector('#task-form');
const userList = document.querySelector('.table');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const mainDate = new Date();
const date = mainDate.getDate();
const month = mainDate.getMonth() + 1;
const year = mainDate.getFullYear();
const reg_date = date + "/" + month + "/" + year;

// Load all event listeners
loadAllEventListenners();

// Load all event listeners functions
function loadAllEventListenners() {
    // Add User event
    form.addEventListener('submit', addUsers);
}

// Add USers function
function addUsers(e) {
    if(firstName.value === '') {
        alert('Put in first name');
    } else if(lastName.value === '') {
        alert('Put in last name');
    } else {
        // Create table body(tbody) element
        const tbody = document.createElement('tbody');
        // Create table row(tr) element
        const tr = document.createElement('tr')
        // Create table cell(td) element
        const td = document.createElement('td');
        // add text content and append child
        td.appendChild(document.createTextNode(firstName.value));
        // Create table cell(td)2 element
        const td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(lastName.value));
        // Create table cell(td)3 element
        const td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(reg_date));
        // Create table cell(td)4 element
        const td4 = document.createElement('td');
        // Create Link
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append Link
        td4.appendChild(link);

        // Append td to tr
        tr.appendChild(td);
        // Append td2 to tr
        tr.appendChild(td2);
        // Append td3 to tr
        tr.appendChild(td3);
        // Append td4 to tr
        tr.appendChild(td4);

        // Append Child (tr) to (tbody)
        tbody.appendChild(tr);

        console.log(tbody);
    }

    e.preventDefault();
}