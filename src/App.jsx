import Product from "./modules/Product";
import { productInfo } from "./modules/data";
import TopPannel from "./modules/TopPannel";
import SelectionList from "./modules/SelectionList";
import { RxTriangleDown } from "react-icons/rx";
import './modules/productItems.css'
import "./App.css";

function App() {
  return (
    <>
      <TopPannel />
      <SelectionList />
      <p style={{fontSize: '14px', marginLeft: '10vw', marginTop: '20px'}}>Liczba wyników: {productInfo.length}</p>
      <ul className="products">
        {productInfo.map((_, i) => (
          <Product {...productInfo[i]} key={i} />
        ))}
      </ul>
      <button id="showMore">
        <p >Pokaż więcej</p>
        <RxTriangleDown />
      </button>
    </>
  );
}

export default App;
