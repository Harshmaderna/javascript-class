document.addEventListener("DOMContentLoaded", () => {
  const pr = document.querySelector("#products");
  const search = document.querySelector("#searchBar");
  const fetchProducts = async () => {
    try {
      const resolve = await fetch("https://dummyjson.com/products");
      const result = await resolve.json();
      displayPr(result.products);
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };

  const displayPr = (products) => {
    pr.innerHTML = "";
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3> ${product.title} </h3>
            <p> ${product.description.slice(0, 50)}...</p>
            <strong>$${product.price}</strong>
        `;
      pr.appendChild(productElement);
    });

    const filterProduct = () => {
        const searchTerm = search.value.toLowerCase()
        const allPr = document.querySelectorAll(".product")
        allPr.forEach((product) => {
            const title =  product.querySelector("h3").textContent.toLowerCase();
            product.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    };
    search.addEventListener("input", filterProduct)

  };

  fetchProducts();
});
