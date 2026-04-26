let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function saveData() {
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function renderTable() {
  const table = document.getElementById("inventoryTable");
  table.innerHTML = "";

  inventory.forEach((item, index) => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>
          <button onclick="deleteItem(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function addItem() {
  const name = document.getElementById("name").value;
  const qty = document.getElementById("qty").value;

  if (!name || !qty) return alert("Fill all fields");

  inventory.push({ name, qty });
  saveData();
  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("qty").value = "";
}

function deleteItem(index) {
  inventory.splice(index, 1);
  saveData();
  renderTable();
}

// Load data on start
renderTable();