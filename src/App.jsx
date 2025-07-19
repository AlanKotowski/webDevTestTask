import { productInfo } from "./modules/data.js";
import Product from "./modules/Product.jsx";
import TopPannel from "./modules/TopPannel.jsx";
import SelectionList from "./modules/SelectionList.jsx";
import { RxTriangleDown } from "react-icons/rx";
import { useState } from "react";
import "./modules/productItems.css";
import "./App.css";

function App() {
  const [dataManipulation, setDataManipulation] = useState(productInfo);

  function manipulating(option) {
    let dataManipulated = [...productInfo];

    // filtering functions
    if (option === "Drzwi AddWash") {
      dataManipulated = dataManipulated.filter((el) =>
        el.productFunctions.includes("Drzwi AddWash")
      );
    } else if (option === "Panel AI Control") {
      dataManipulated = dataManipulated.filter((el) =>
        el.productFunctions.includes("Panel AI Control")
      );
    } else if (option === "Silnik inwerterowy") {
      dataManipulated = dataManipulated.filter((el) =>
        el.productFunctions.includes("Silnik inwerterowy")
      );
    } else if (option === "Wyświeltacz elektroniczny") {
      dataManipulated = dataManipulated.filter((el) =>
        el.productFunctions.includes("Wyświetlacz elektroniczny")
      );
    }

    // filtering energy labels
    if (option === "A") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "A");
    } else if (option === "B") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "B");
    } else if (option === "C") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "C");
    } else if (option === "D") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "D");
    } else if (option === "E") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "E");
    } else if (option === "F") {
      dataManipulated = dataManipulated.filter((el) => el.EnergyLabel === "F");
    }
    setDataManipulation(dataManipulated);

    // filtering capacity
    if (option === "8") {
      dataManipulated = dataManipulated.filter(
        (el) => el.productCapacity === "8"
      );
    } else if (option === "9") {
      dataManipulated = dataManipulated.filter(
        (el) => el.productCapacity === "9"
      );
    } else if (option === "10.5") {
      dataManipulated = dataManipulated.filter(
        (el) => el.productCapacity === "10.5"
      );
    }
    setDataManipulation(dataManipulated);

    // sorting products
    if (option === "productPriceZl") {
      dataManipulated.sort((a, b) => a.productPriceZl - b.productPriceZl);
    } else if (option === "productCapacity") {
      dataManipulated.sort((a, b) => a.productCapacity - b.productCapacity);
    } else if (option === "productPopularity") {
      dataManipulated
        .sort((a, b) => a.productPopularity - b.productPopularity)
        .reverse();
    } else if (option === "id") {
      dataManipulated.sort((a, b) => a.id - b.id);
    }
    setDataManipulation(dataManipulated);
  }

  return (
    <>
      <TopPannel />
      <SelectionList onManipulateData={manipulating} />
      <p style={{ fontSize: "14px", marginLeft: "15vw", marginTop: "150px" }}>
        Liczba wyników: {productInfo.length}
      </p>
      <ul className="products">
        {dataManipulation.map((_, i) => (
          <Product {...dataManipulation[i]} key={i} />
        ))}
      </ul>
      <button id="showMore">
        <p>Pokaż więcej</p>
        <RxTriangleDown />
      </button>
    </>
  );
}

export default App;
