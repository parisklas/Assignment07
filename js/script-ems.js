// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12762737, 'Frank Ocean', 4474, 'frank@ocean.com', 'Executive'],
    [83726394, 'Blake Lively', 8383, 'blake@lively.com', 'Marketing'],
    [28294629, 'Tom Hanks', 7830, 'tom@hanks.com', 'Sales'],
    [91837465, 'Gerard Butler', 9274, 'gerard@butler.com', 'Engineering'],
    [82828490, 'Frida Kahlo', 8286, 'frida@kahlo.com', 'Quality Assurance']
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm');
let empTable = document.getElementById('empTable');
let count = document.getElementById('empCount');
// let submitBtn = document.getElementById('submit');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    // let employees = JSON.parse(localStorage.getItem('employees'));
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, name, ext, email, department];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex -1, 1);
        // BUILD THE GRID
        buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees.forEach((employee, index) => {
        let row = tbody.insertRow();
        Object.values(employee).forEach(text => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(text));
        });
    })
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').innerText = employees.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};