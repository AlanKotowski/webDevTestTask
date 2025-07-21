import "../modules/productItems.css";
import { useState } from "react";

export default function Product({
  image,
  productName,
  productCapacity,
  productDimensions,
  productFunctions,
  energyLabel,
  productPriceDate,
  productPriceZl,
  productPriceGr,
  productPriceInstallments,
}) {
  // button for selecting products
  const [selected, setSelected] = useState(false);
  function selecting() {
    setSelected(!selected);
  }

  // change punctuation mark from data
  const switchProductCapacity = productCapacity.replace(".", ",");

  return (
    // product card
    // product name and image
    <li className="productItem">
      <img src={image} alt={productName} id="productImage" />
      <span>
        <h2 id="productName">{productName}</h2>
      </span>
      {/* product description */}
      {/* product capacity */}
      <div className="descriptionLine">
        <p className="descriptionTitle">Pojemność (kg):</p>
        <p className="descriptionValue">{switchProductCapacity}</p>
      </div>
      {/* product dimensions */}
      <div className="descriptionLine">
        <p className="descriptionTitle">Wymiary (GxSxW):</p>
        <p className="descriptionValue">{productDimensions}</p>
      </div>
      {/* product functions */}
      <div className="descriptionLine">
        <p className="descriptionValue" id="functionsValue">
          <p className="descriptionTitle" id="functionsTitle">
            Funkcje:
          </p>
          {productFunctions}
        </p>
      </div>
      {/* energy label */}
      <div className="descriptionLine" style={{ margin: "15px 0" }}>
        <p className="descriptionTitle">Klasa energetyczna:</p>
        <p className="descriptionValue" id="energyLabel">
          {energyLabel}
        </p>
        <div id="triangle"></div>
      </div>
      <div className="descriptionLine">
        {/* current price date and amount */}
        <p className="descriptionTitle">Cena obowiązuje: {productPriceDate}</p>
      </div>
      <div id="price">
        <h1 id="productPriceZl">{productPriceZl}</h1>
        <div id="productPriceRightPanel">
          <p className="priceGr">{productPriceGr}</p>
          <p>zł</p>
        </div>
      </div>
      {/* button style switch */}
      <p id="installments">{productPriceInstallments}</p>
      {!selected && (
        <button className="selectButton basic" onClick={selecting}>
          WYBIERZ
        </button>
      )}
      {selected && (
        <button className="selectButton selected" onClick={selecting}>
          WYBRANE
        </button>
      )}
    </li>
  );
}
