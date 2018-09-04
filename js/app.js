// Define UI's Variables
const form = document.querySelector('#task-form');
const userList = document.querySelector('.table');
const clearBtn = document.querySelector('.delete-users');
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
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getUsers);
    // Add User event
    form.addEventListener('submit', addUsers);
    // Remove user event
    userList.addEventListener('click', removeUser);
    // Delete all users
    clearBtn.addEventListener('click', deleteAllUsers);
    // Search for users
    filter.addEventListener('keyup', searchForUser);
}

// Get Users from LS
function getUsers(user) {
    let fName;
    let lName;
    let reg_Date;
    if(localStorage.getItem('fname') === null && localStorage.getItem('lname') === null && localStorage.getItem('regDate') === null) {
        fName = [];
        lName = [];
        reg_Date = [];
    } else {
        fName = JSON.parse(localStorage.getItem('fname'));
        lName = JSON.parse(localStorage.getItem('lname'));
        reg_Date = JSON.parse(localStorage.getItem('regDate'));
    }

    fName.forEach(function(fname){
        lName.forEach(function(lname){
            reg_Date.forEach(function(regDate){
                // Create table body(tbody) element
                const tbody = document.createElement('tbody');
                // Create table row(tr) element
                const tr = document.createElement('tr')
                // Create table cell(td) element
                const td = document.createElement('td');
                // add text content and append child
                td.appendChild(document.createTextNode(fname));
                // Create table cell(td)2 element
                const td2 = document.createElement('td');
                td2.appendChild(document.createTextNode(lname));
                // Create table cell(td)3 element
                const td3 = document.createElement('td');
                td3.appendChild(document.createTextNode(regDate));
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

                // Append Child (tbody) to (table)
                userList.appendChild(tbody);
            });
        });
    });
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

        // Append Child (tbody) to (table)
        userList.appendChild(tbody);

        // Store in LS
        storeInLocalStorage(firstName.value, lastName.value, reg_date);

        // Clear inputs
        firstName.value = '';
        lastName.value = '';
    }

    e.preventDefault();
}

// Store in local storage function
function storeInLocalStorage(fname, lname, regDate) {
    
    let fName;
    let lName;
    let reg_Date;
    if(localStorage.getItem('fname') === null && localStorage.getItem('lname') === null && localStorage.getItem('regDate') === null) {
        fName = [];
        lName = [];
        reg_Date = [];
    } else {
        fName = JSON.parse(localStorage.getItem('fname'));
        lName = JSON.parse(localStorage.getItem('lname'));
        reg_Date = JSON.parse(localStorage.getItem('regDate'));
    }

    fName.push(fname);
    lName.push(lname);
    reg_Date.push(regDate);
    
    localStorage.setItem('fname', JSON.stringify(fName));
    localStorage.setItem('lname', JSON.stringify(lName));
    localStorage.setItem('regDate', JSON.stringify(reg_Date));
}

// Remove Users function
function removeUser(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.parentElement.remove();
            removeUserFromLocalStorage(e.target.parentElement.parentElement.parentElement);
        }
    }
}

// Delete from LS
function removeUserFromLocalStorage(userlist) {
    // let fName;
    // let lName;
    // let reg_Date;
    // if(localStorage.getItem('fname') === null && localStorage.getItem('lname') === null && localStorage.getItem('regDate') === null) {
    //     fName = [];
    //     lName = [];
    //     reg_Date = [];
    // } else {
    //     fName = JSON.parse(localStorage.getItem('fname'));
    //     lName = JSON.parse(localStorage.getItem('lname'));
    //     reg_Date = JSON.parse(localStorage.getItem('regDate'));
    // }

    // fName.forEach(function(user, index){
    //     lName.forEach(function(user, index){
    //         reg_Date.forEach(function(user, index){
    //             if(userlist.textContent === user) {
    //                 fName.splice(index, 1);
    //                 lName.splice(index, 1);
    //                 reg_Date.splice(index, 1);  
    //             }
    //         });
    //     });
    // });

    // localStorage.setItem('fname', JSON.stringify(fName));
    // localStorage.setItem('lname', JSON.stringify(lName));
    // localStorage.setItem('regDate', JSON.stringify(reg_Date));
}

// Delete all users function
function deleteAllUsers(e) {
    while(userList.firstChild) {
        userList.removeChild(userList.firstChild);
    }

    // Delete all from LS
    deleteFromLS();
}

// Delete from LS
function deleteFromLS() {
    localStorage.clear();
}

// Search Users function 
function searchForUser(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('tr').forEach(function(user){
        const item = user.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            user.style.display = 'block';
        } else {
            user.style.display = 'none';
        }
    });
}