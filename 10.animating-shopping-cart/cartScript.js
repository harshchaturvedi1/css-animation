const imageNames = ["t-1.jpeg", "t-2.jpeg", "t-3.jpeg"];

const showItemToCart = (imageSrc) => {
  document.getElementById("moving-to-cart")?.remove();

  const toCart = document.createElement("div");
  toCart.className = "move-to-cart";
  toCart.id = "moving-to-cart";
  const toCartImage = document.createElement("img");
  toCartImage.id = "to-cart-image";
  toCartImage.src = `./images/${imageSrc}`;
  document.body.append(toCart);
  toCart.appendChild(toCartImage);
};

const createItems = (imageSrc) => {
  const outerDiv = document.createElement("div");
  outerDiv.className = "items";
  const imageItem = document.createElement("img");
  imageItem.src = `./images/${imageSrc}`;
  imageItem.alt = "t-shirt";
  const clickButton = document.createElement("button");
  clickButton.innerText = "Add to cart";
  clickButton.addEventListener("click", () => {
    console.log(`./images/${imageSrc}`);
    showItemToCart(imageSrc);
  });
  outerDiv.append(imageItem);
  outerDiv.append(clickButton);
  return outerDiv;
};

const addItemstoUi = () => {
  const itemContainer = document.getElementsByClassName("item-collection");
  console.log("itemContainer", itemContainer);
  imageNames.forEach((ele) => {
    const item = createItems(ele);
    itemContainer[0].appendChild(item);
  });
};

addItemstoUi();
