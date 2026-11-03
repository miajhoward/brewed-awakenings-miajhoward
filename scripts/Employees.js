import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-id="${employee.id}"
             data-type="employee"
             data-name="${employee.name}">
           ${employee.name}
         </li>`;
  }

  html += "</ul>";

  return html;
};
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "employee") {
    const employeeId = parseInt(itemClicked.dataset.id);
    let orderCounter = 0;
    const orders = getOrders();
    for (const order of orders) {
      if (order.employeeId === employeeId) {
        orderCounter++;
      }
    }
    window.alert(`${itemClicked.dataset.name} sold ${orderCounter} products`);
  }
});
