import '../modules/productItems.css'
import { useState } from "react";


export default function Product({
  image,
  productName,
  productCapacity,
  productDimensions,
  productFunctions,
  EnergyLabel,
  productPriceDate,
  productPriceZl,
  productPriceGr,
  productPriceInstallments,
}) {
const [selected, setSelected] = useState(false)
function selecting(){
  setSelected(!selected)

}
const switchProductCapacity = productCapacity.replace('.', ',')
  return (
    <li className="productItem">
      <img src={image} alt={productName} id='productImage'/>
      <span>
        <h2 id='productName'>{productName}</h2>
      </span>
      <div className='descriptionLine'>
        <p className='descriptionTitle'>Pojemność (kg):</p>
        <p className='descriptionValue'>{switchProductCapacity}</p>
      </div>
      <div className='descriptionLine'>
        <p className='descriptionTitle'>Wymiary (GxSxW):</p>
        <p className='descriptionValue'>{productDimensions}</p>
      </div>
      <div className='descriptionLine'>
        
        <p className='descriptionValue' id='functionsValue'><p className='descriptionTitle' id='functionsTitle'>Funkcje:</p>{productFunctions}</p>
      </div>
      <div className='descriptionLine' style={{margin: '15px 0'}}>
        <p className='descriptionTitle' >Klasa energetyczna:</p>
        <p className='descriptionValue' id='energyLabel'>{EnergyLabel}</p>
        <div id='triangle'></div>
      </div>
      <div className='descriptionLine'>
        <p className='descriptionTitle'>Cena obowiązuje: {productPriceDate}</p>
      </div>
      <div id='price'>
        <h1 id='productPriceZl'>{productPriceZl}</h1>
        <div id='productPriceRightPanel'>
          <p className='priceGr'>{productPriceGr}</p>
          <p >zł</p>
        </div>
      </div>
      <p id='installments'>{productPriceInstallments}</p>
      {!selected && <button className='selectButton basic' onClick={selecting}>WYBIERZ</button>}
      {selected && <button className='selectButton selected' onClick={selecting}>WYBRANE</button>}
      
    </li>
  );
}
