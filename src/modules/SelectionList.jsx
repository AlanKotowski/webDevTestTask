import '../modules/selectionList.css'

export default function SelectionList() {
  return (
    <div id='inputsContainer'>
      <div id="sorting" className="selections">
        <h3>Sotruj po:</h3>
        <select className="selectFrame"> 
          <option className='optionFrame'>Popularność</option>
          <option className='optionFrame'>Wszystkie</option>
          <option className='optionFrame'>Cena</option>
          <option className='optionFrame'>Pojemność</option>
        </select>
      </div>
      <div id="functionsFiltering" className="selections">
        <h3>Funkcje:</h3>
        <select className="selectFrame">
          <option className='optionFrame'> Pokaż wszystkie</option>
          <option className='optionFrame'> Wszystkie</option>
          <option className='optionFrame'> Drzwi AddWash</option>
          <option className='optionFrame'> Panel AI Control</option>
          <option className='optionFrame'> Silnik inwerter</option>
          <option className='optionFrame'> Wyświeltacz elektroniczny</option>
        </select>
      </div>
      <div id="energyLabelFiltering" className="selections">
        <h3>Klasa energetyczna:</h3>
        <select className="selectFrame">
          <option className='optionFrame'>Pokaż wszystkie</option>
          <option className='optionFrame'>Wszystkie</option>
          <option className='optionFrame'>A</option>
          <option className='optionFrame'>B</option>
          <option className='optionFrame'>C</option>
          <option className='optionFrame'>D</option>
          <option className='optionFrame'>E</option>
          <option className='optionFrame'>F</option>
        </select>
      </div>
      <div id="capacityFiltering" className="selections">
        <h3>Pojemność:</h3>
        <select className="selectFrame">
          <option className='optionFrame'>Pokaż wszystkie</option>
          <option className='optionFrame'>Wszystkie</option>
          <option className='optionFrame'>9kg</option>
          <option className='optionFrame'>8kg</option>
          <option className='optionFrame'>10.5kg</option>
        </select>
      </div>
    </div>
  );
}
