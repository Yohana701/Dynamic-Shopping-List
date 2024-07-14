document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addItemBtn = document.getElementById("addItemBtn");
  const editItemBtn = document.getElementById("editItemBtn");
  const removeItemBtn = document.getElementById("removeItemBtn");
  const shoppingList = document.getElementById("shoppingList");
  let currentItem = null;

  addItemBtn.addEventListener("click", addItem);
  editItemBtn.addEventListener("click", editItem);
  removeItemBtn.addEventListener("click", removeItem);
  shoppingList.addEventListener("click", selectItem); // Corrected to "click"

  function addItem() {
    const itemText = itemInput.value.trim(); // Renamed variable to itemText
    if (itemText) {
      const li = document.createElement("li");
      li.textContent = itemText;
      shoppingList.appendChild(li);
      itemInput.value = "";
    }
  }

  function editItem() {
    if (currentItem) {
      currentItem.textContent = itemInput.value.trim();
      currentItem.classList.remove("selected");
      currentItem = null;
      itemInput.value = "";
    }
  }

  function removeItem() {
    if (currentItem) {
      shoppingList.removeChild(currentItem);
      currentItem = null;
      itemInput.value = "";
    }
  }

  function selectItem(event) {
    const selectedItem = event.target;
    if (selectedItem.tagName.toLowerCase() === 'li') {
      const items = document.querySelectorAll("li");
      items.forEach((item) => item.classList.remove("selected"));
      selectedItem.classList.add("selected");
      currentItem = selectedItem;
      itemInput.value = currentItem.textContent;
    }
  }
});
