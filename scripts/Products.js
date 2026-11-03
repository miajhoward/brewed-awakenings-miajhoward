import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li data-id="${product.id}"
                        data-type="product"
data-price="${product.price}"
                      data-name="${product.name}">
                      ${product.name}
                    </li>`;
  }

  html += "</ul>";

  return html;
};
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "product") {
    window.alert(
      `${itemClicked.dataset.name} costs $${itemClicked.dataset.price}`,
    );
  }
});
