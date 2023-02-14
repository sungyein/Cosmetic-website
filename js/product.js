/*  Products Slider  */
const swiper = new Swiper(".mySwiper", {
  grabCursor: true, 
  slidesPerView: 1, 
  spaceBetween: 70,
  pagination: {
    el: false,
    clickable: true, 
  },
  breakpoints: { 
    300: {
      slidesPerView: 1, 
    },
    567: {
      slidesPerView: 2, 
    },
    996: {
      slidesPerView: 3, 
    },
  },
});


/*  Fetch the Products  */
const getProducts = async () => {
  try {
    //Json 읽기
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapper = document.getElementById("products");

window.addEventListener("DOMContentLoaded", async function () {
  let products = await getProducts();
  products = products.filter((product) => product.category === "Best");
  displayProductItems(products);
  loadData();
});

/* Display Products  */
const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => `
            <div class="swiper-slide">
                <div class="product">
                  <div class="top d-flex">
                    <img src=${product.url} alt="">
                  </div>
                  <div class="bottom">
                    <h4>${product.title}</h4>
                    <span>50 shades</span>
                    <div class="d-flex btn-2">
                      <div>Add to Bag</div>
                      <div class="rating">
                        <span>$${product.price}</span>
                        <span><del>$${product.saleprice}</del></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
  );

  displayProduct = displayProduct.join("");
  ProductsWrapper.innerHTML = displayProduct;
};

