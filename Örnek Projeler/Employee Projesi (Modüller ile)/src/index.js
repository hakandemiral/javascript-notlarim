import {Request} from "./requests";
import {UI} from "./ui"

//Elementleri seçme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

//Objelerimi oluşturuoyrum
const request = new Request("http://localhost:3000/employees");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getAllEmployees);
form.addEventListener("submit", addEmployee)
employeesList.addEventListener("click", UpdateOrDelete)

function addEmployee(e){

    e.preventDefault();

    request.post({
        name: nameInput.value,
        department: departmentInput.value,
        salary: salaryInput.value
    })
    .then(response => ui.addEmployeeToUI(response))
    .catch(err => console.error(err))

    ui.clearInput()
   
}

function UpdateOrDelete(e) {

    if(e.target.id === "delete-employee"){
        deleteEmployee(e.target);
    }
    else if(e.target.id === "update-employee"){
        updateEmployee(e.target);
    }
}

function deleteEmployee(element) {
    const employeeId = element.parentElement.previousElementSibling.previousElementSibling.textContent;
    const employeeElement = element.parentElement.parentElement;

    console.log(employeeId)
    request.delete(employeeId);
    ui.deleteEmployeeToUI(employeeElement);
}

function updateEmployee(element) {
    const employeeId = element.parentElement.previousElementSibling.textContent;
    const employeeSalary = element.parentElement.previousElementSibling.previousElementSibling;
    const employeeDepartment = element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    const employeeName = element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

    updateEmployeeButton.style.display = "block";


    salaryInput.value = employeeSalary.textContent;
    departmentInput.value = employeeDepartment.textContent;
    nameInput.value = employeeName.textContent;

    updateEmployeeButton.addEventListener("click", () => {

        request.put(employeeId,{
            name: nameInput.value,
            department: departmentInput.value,
            salary: salaryInput.value
        })
        .then(response => {
            employeeSalary.textContent = response.salary;
            employeeDepartment.textContent = response.department;
            employeeName.textContent = response.name;
        })
        .catch(err => console.error(err))

        ui.clearInput();
    })
}

function getAllEmployees() {
    request.get()
    .then(response => ui.addAllEmployeeToUI(response))
    .catch(err => console.table(err));
}