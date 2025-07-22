import { productInfo } from "./modules/data.js";
import Product from "./modules/Product.jsx";
import TopPannel from "./modules/TopPannel.jsx";
import SelectionList from "./modules/SelectionList.jsx";
import PaginationButton from "./modules/PaginationButton.jsx";
import { useState } from "react";
import "./modules/productItems.css";
import "./App.css";

function App() {
  // filters and sorting state
  const [dataManipulation, setDataManipulation] = useState({
    productFunctions: "all",
    energyLabel: "all",
    productCapacity: "all",
    sorting: null,
  });

  // pagination state
  const [pagination, setPagination] = useState(6);

  // searching state
  const [search, setSearch] = useState('')

  // filters, sorting and searching
  // filters 
  const functionsFilter = (productFunctions) =>
    setDataManipulation({ ...dataManipulation, productFunctions });
  const energyFilter = (energyLabel) =>
    setDataManipulation({ ...dataManipulation, energyLabel });
  const capacityFilter = (productCapacity) =>
    setDataManipulation({ ...dataManipulation, productCapacity });

  const filtering = productInfo.filter((product) => {
    const functionsFiltering =
      dataManipulation.productFunctions === "all" ||
      product.productFunctions.includes(dataManipulation.productFunctions);
    const energyFiltering =
      dataManipulation.energyLabel === "all" ||
      product.energyLabel.includes(dataManipulation.energyLabel);
    const capacityFiltering =
      dataManipulation.productCapacity === "all" ||
      product.productCapacity.includes(dataManipulation.productCapacity);
    return functionsFiltering && energyFiltering && capacityFiltering;
  });

  // sorting 
  const sortingByPrice = () =>
    setDataManipulation({ ...dataManipulation, sorting: "productPriceZl" });
  const sortingByCapacity = () =>
    setDataManipulation({ ...dataManipulation, sorting: "productCapacity" });
  const sortingByPopularity = () =>
    setDataManipulation({ ...dataManipulation, sorting: "productPopularity" });
  const sortingById = () =>
    setDataManipulation({ ...dataManipulation, sorting: "id" });

  const sortItems = filtering.sort((a, b) => {
    if (dataManipulation.sorting === "productPriceZl")
      return a.productPriceZl - b.productPriceZl;
    if (dataManipulation.sorting === "productCapacity")
      return a.productCapacity - b.productCapacity;
    if (dataManipulation.sorting === "productPopularity")
      return b.productPopularity - a.productPopularity;
    if (dataManipulation.sorting === "id") return a.id - b.id;
    return null;
  });

// searching
const searchingProducts = (e) => setSearch(e.target.value)

const searchedProducts = sortItems.filter(product => 
(product.productName.toLowerCase().includes(search.toLowerCase()))
|| (product.productFunctions.toLowerCase().includes(search.toLowerCase()))
)

  // UI 
  return (
    <>
      <TopPannel onSearchingProducts={searchingProducts} search={search}/>
      <SelectionList
        onFunctionsFilter={functionsFilter}
        onEnergyFilter={energyFilter}
        onCapacityFilter={capacityFilter}
        onSortingByPrice={sortingByPrice}
        onSortingByCapacity={sortingByCapacity}
        onSortingByPopularity={sortingByPopularity}
        onSortingById={sortingById}
      />
      <p style={{ fontSize: "14px", marginLeft: "19vw", marginTop: "150px" }}>
        Liczba wyników: {searchedProducts.length}
      </p>
      <ul className="products">
        {searchedProducts.slice(0, pagination).map((e, i) => (
          <Product {...e} key={i} />
        ))}
      </ul>
      <PaginationButton
        setPagination={setPagination}
        searchedProducts={searchedProducts}
        pagination={pagination}
      />
    </>
  );
}

export default App;
