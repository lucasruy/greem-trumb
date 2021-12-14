import { productIcons } from "constants/iconList";

/**
 * buildProductGrid
 * --
 * Method responsible for creating the product grid based on the return provided by PLANTS_SERVICE_URL
 * @param {Object} data Object containing data returned by PLANTS_SERVICE_URL
 * @property {String} data.id Product identification number
 * @property {String} data.name Product name
 * @property {String} data.price Product price
 * @property {Boolean} data.staff_favorite Product badge flag
 * @property {String} data.sun Field used to show sun icon
 * @property {Boolean} data.toxicity Field used to show toxic icon
 * @property {String} data.url Product image
 * @property {String} data.water Field used to show water icon
 */
const buildProductGrid = (data) => {
  return new Promise(function (resolve, reject) {
    const productList = document.querySelector(".showcase > .list");

    const clearList = (nodeElement) => {
      if (nodeElement.childElementCount > 0) {
        Object.values(nodeElement.children).forEach((item) => {
          nodeElement.removeChild(item);
        });
      }
    };

    const createProducts = () => {
      data.forEach((item, index) => {
        const { name, price, sun, toxicity, url, water } = item;

        const productTemplate = `
          <figure class="productimage">
            <img
              src="${url}"
              alt="image of ${name}"
            />
          </figure>
          <div class="productinfos">
            <h4 class="name">${name}</h4>
            <div class="details">
              <span class="price">$${price}</span>
              <ul class="iconlist">
                ${
                  toxicity
                    ? `
                    <li class="iconitem">
                      <figure class="iconfigure" title="Toxic plant">
                        <img
                          src="./src/images/icons/product/toxic.svg"
                          alt="icon of a toxic plant"
                        />
                      </figure>
                    </li>
                    `
                    : ""
                }
                <li class="iconitem">
                  <figure class="iconfigure" title="Need ${sun} sunlight">
                    <img
                      src="${productIcons.sun[sun]}"
                      alt="illustration of sun"
                    />
                  </figure>
                </li>
                <li class="iconitem ${water === "daily" ? "-large" : ""}">
                  <figure class="iconfigure" title="use water ${water}">
                    <img
                      src="${productIcons.water[water]}"
                      alt="illustration of water"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        `;
        const product = document.createElement("div");

        product.classList.add("product");
        product.innerHTML = productTemplate;

        if (index === 0) {
          product.classList.add("-first");
        }

        productList.appendChild(product);
      });
    };

    clearList(productList);
    createProducts();
    resolve("The product grid was successfully built");
  });
};

export default buildProductGrid;
