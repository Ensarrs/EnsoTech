document.addEventListener("DOMContentLoaded", () => {
    const filterOptions = document.querySelectorAll(".filter-option");
    const products = document.querySelectorAll(".product-grid .card");
  
    let visibleProducts = 3;
    products.forEach((product, index) => {
      product.classList.toggle("d-none", index >= visibleProducts);
    });
  
    filterOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
  
        products.forEach((product) => {
          if (category === "all" || product.dataset.category === category) {
            product.classList.remove("d-none");
          } else {
            product.classList.add("d-none");
          }
        });
      });
    });
  });
  let totalPrice = 749.97;

  function updateTotalPrice() {
    document.getElementById("total-price").innerText = "$" + totalPrice.toFixed(2);
  }

  function removeProduct(id, price) {
    const row = document.getElementById(id);
    row.style.display = "none";
    totalPrice -= price;
    updateTotalPrice();
  }

  document.getElementById("remove-btn-1").addEventListener("click", function() {
    removeProduct("row-1", 499.99);
  });
  document.getElementById("remove-btn-2").addEventListener("click", function() {
    removeProduct("row-2", 119.99);
  });
  document.getElementById("remove-btn-3").addEventListener("click", function() {
    removeProduct("row-3", 129.99);
  });

  