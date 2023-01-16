const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

const logItremsInfo = (items) => {
  items.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
};

logItremsInfo(itemsEl);
