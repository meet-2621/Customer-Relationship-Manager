let customers = JSON.parse(localStorage.getItem("customers")) || [];
function displayCustomers(data = customers) {const list = document.getElementById("customerList");
list.innerHTML = "";data.forEach((cust, index) => {
list.innerHTML += `<tr>  <td>${cust.name}</td>  <td>${cust.email}</td>  <td>${cust.phone}</td>  <td>
<button onclick="editCustomer(${index})">Edit</button><button onclick="deleteCustomer(${index})">Delete</button> </td></tr>`; });}
function addCustomer() {
const name = document.getElementById("name").value.trim();const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();if (!name || !email || !phone) {alert("All fields are required!");
return;}customers.push({ name, email, phone });localStorage.setItem("customers", JSON.stringify(customers));clearForm();displayCustomers();}
function deleteCustomer(index) {
  if (confirm("Are you sure you want to delete this customer?")) {customers.splice(index, 1);
    localStorage.setItem("customers", JSON.stringify(customers));displayCustomers();}}
function editCustomer(index) {const cust = customers[index];document.getElementById("name").value = cust.name;
  document.getElementById("email").value = cust.email;document.getElementById("phone").value = cust.phone;deleteCustomer(index);}
function searchCustomer() {const query = document.getElementById("search").value.toLowerCase();
const filtered = customers.filter(c =>c.name.toLowerCase().includes(query) ||c.email.toLowerCase().includes(query) ||
c.phone.includes(query));displayCustomers(filtered);}
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";}
displayCustomers();