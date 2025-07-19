import "../modules/selectionList.css";
import { useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";

export default function SelectionList({ onManipulateData }) {
  const [sortVis, setSortVis] = useState('')
  const [functionsVis, setFunctionsVis] = useState(false)
  const [energyVis, setEnergyVis] = useState(false)
  const [capacityVis, setCapacityVis] = useState(false)
  
  function toggleSortVis(){
    setSortVis(!sortVis)
  }
  function toggleFunctionsVis(){
    setFunctionsVis(!functionsVis)
  }
  function toggleEnergyVis(){
    setEnergyVis(!energyVis)
  }
  function toggleCapacityVis(){
    setCapacityVis(!capacityVis)
  }


  return (
    <div id="inputsContainer">
      <div id="sorting" className="selections">
          <h3>Sortuj po:</h3>
      <button className="showOptionFrame" onClick={ toggleSortVis }><p>Pokaż wszystkie</p>{!sortVis ? <RxTriangleDown style={{color: '#8D8D8D', scale: '1.5'}} /> : <RxTriangleUp style={{color: '#8D8D8D', scale: '1.5'}}/>}</button>
      { sortVis &&
        <ul className="selectFrame">
          <li ><button className="optionFrame" onClick={() => onManipulateData('productPopularity')}>Popularność</button></li>
          <li ><button className="optionFrame" onClick={() => onManipulateData('id')}>Wszystkie</button></li>
          <li ><button className="optionFrame" onClick={() => onManipulateData('productPriceZl')}>Cena</button></li>
          <li ><button className="optionFrame" onClick={() => onManipulateData('productCapacity')}>Pojemność</button></li>
        </ul>}
      </div>

      <div id="functionsFiltering" className="selections">
        <h3>Funkcje:</h3>
          <button className="showOptionFrame" onClick={ toggleFunctionsVis }><p>Pokaż wszystkie</p>{!functionsVis ? <RxTriangleDown style={{color: '#8D8D8D', scale: '1.5'}} /> : <RxTriangleUp style={{color: '#8D8D8D', scale: '1.5'}}/>}</button>
          {functionsVis &&
        <ul className="selectFrame">
          <li><button className="optionFrame" onClick={() => onManipulateData('id')}>Wszystkie</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('Drzwi AddWash')}>Drzwi AddWash</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('Panel AI Control')}>Panel AI Control</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('Silnik inwerterowy')}>Silnik inwerterowy</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('Wyświeltacz elektroniczny')}>Wyświeltacz elektroniczny</button></li>
        </ul>}
      </div>

      <div id="energyLabelFiltering" className="selections">
        <h3>Klasa energetyczna:</h3>
          <button className="showOptionFrame" onClick={toggleEnergyVis}><p>Pokaż wszystkie</p> {!energyVis ? <RxTriangleDown style={{color: '#8D8D8D', scale: '1.5'}} /> : <RxTriangleUp style={{color: '#8D8D8D', scale: '1.5'}}/>}</button>
          {energyVis &&
        <ul className="selectFrame">
          <li><button className="optionFrame" onClick={() => onManipulateData('id')}>Wszystkie</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('A')}>A</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('B')}>B</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('C')}>C</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('D')}>D</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('E')}>E</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('F')}>F</button></li>
        </ul>}
      </div>
      
      <div id="capacityFiltering" className="selections">
        <h3>Pojemność:</h3>
          <button className="showOptionFrame" onClick={ toggleCapacityVis}><p>Pokaż wszystkie</p>{!capacityVis ? <RxTriangleDown style={{color: '#8D8D8D', scale: '1.5'}} /> : <RxTriangleUp style={{color: '#8D8D8D', scale: '1.5'}}/>}</button>
{capacityVis &&
        <ul className="selectFrame">
          <li><button className="optionFrame" onClick={() => onManipulateData('id')}>Wszystkie</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('9')}>9kg</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('8')}>8kg</button></li>
          <li><button className="optionFrame" onClick={() => onManipulateData('10.5')}>10.5kg</button></li>
        </ul>}
      </div>
    </div>
  );
}
