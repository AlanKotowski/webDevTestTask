import "../modules/selectionList.css";
import { useState } from "react";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

export default function SelectionList({
  onFunctionsFilter,
  onEnergyFilter,
  onCapacityFilter,
  onSortingByPrice,
  onSortingByCapacity,
  onSortingByPopularity,
  onSortingById,
}) {
  // sorting and filtering buttons
  const [sortVis, setSortVis] = useState("");
  const [functionsVis, setFunctionsVis] = useState(false);
  const [energyVis, setEnergyVis] = useState(false);
  const [capacityVis, setCapacityVis] = useState(false);
  // show sorting options
  function toggleSortVis() {
    setSortVis(!sortVis);
  }
  // show filtering by functions
  function toggleFunctionsVis() {
    setFunctionsVis(!functionsVis);
  }
  // show filtering by energy label
  function toggleEnergyVis() {
    setEnergyVis(!energyVis);
  }
  // show filtering by capacity
  function toggleCapacityVis() {
    setCapacityVis(!capacityVis);
  }

  return (
    <div id="inputsContainer">
      {/* sorting */}
      <div id="sorting" className="selections">
        <h3>Sortuj po:</h3>
        <button className="showOptionFrame" onClick={toggleSortVis}>
          <p>Pokaż wszystkie</p>
          {!sortVis ? (
            <RxTriangleDown style={{ color: "#8D8D8D", scale: "1.5" }} />
          ) : (
            <RxTriangleUp style={{ color: "#8D8D8D", scale: "1.5" }} />
          )}
        </button>
        {sortVis && (
          <ul className="selectFrame">
            <li>
              <button className="optionFrame" onClick={onSortingByPopularity}>
                Popularność
              </button>
            </li>
            <li>
              <button className="optionFrame" onClick={onSortingById}>
                Wszystkie
              </button>
            </li>
            <li>
              <button className="optionFrame" onClick={onSortingByPrice}>
                Cena
              </button>
            </li>
            <li>
              <button className="optionFrame" onClick={onSortingByCapacity}>
                Pojemność
              </button>
            </li>
          </ul>
        )}
      </div>
      {/* functions */}
      <div id="functionsFiltering" className="selections">
        <h3>Funkcje:</h3>
        <button className="showOptionFrame" onClick={toggleFunctionsVis}>
          <p>Pokaż wszystkie</p>
          {!functionsVis ? (
            <RxTriangleDown style={{ color: "#8D8D8D", scale: "1.5" }} />
          ) : (
            <RxTriangleUp style={{ color: "#8D8D8D", scale: "1.5" }} />
          )}
        </button>
        {functionsVis && (
          <ul className="selectFrame">
            <li>
              <button
                className="optionFrame"
                onClick={() => onFunctionsFilter("all")}
              >
                Wszystkie
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onFunctionsFilter("Drzwi AddWash")}
              >
                Drzwi AddWash
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onFunctionsFilter("Panel AI Control")}
              >
                Panel AI Control
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onFunctionsFilter("Silnik inwerterowy")}
              >
                Silnik inwerterowy
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onFunctionsFilter("Wyświetlacz elektroniczny")}
              >
                Wyświeltacz elektroniczny
              </button>
            </li>
          </ul>
        )}
      </div>
      {/* energy label */}
      <div id="energyLabelFiltering" className="selections">
        <h3>Klasa energetyczna:</h3>
        <button className="showOptionFrame" onClick={toggleEnergyVis}>
          <p>Pokaż wszystkie</p>{" "}
          {!energyVis ? (
            <RxTriangleDown style={{ color: "#8D8D8D", scale: "1.5" }} />
          ) : (
            <RxTriangleUp style={{ color: "#8D8D8D", scale: "1.5" }} />
          )}
        </button>
        {energyVis && (
          <ul className="selectFrame">
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("all")}
              >
                Wszystkie
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("A")}
              >
                A
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("B")}
              >
                B
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("C")}
              >
                C
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("D")}
              >
                D
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("E")}
              >
                E
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onEnergyFilter("F")}
              >
                F
              </button>
            </li>
          </ul>
        )}
      </div>
      {/* capacity */}
      <div id="capacityFiltering" className="selections">
        <h3>Pojemność:</h3>
        <button className="showOptionFrame" onClick={toggleCapacityVis}>
          <p>Pokaż wszystkie</p>
          {!capacityVis ? (
            <RxTriangleDown style={{ color: "#8D8D8D", scale: "1.5" }} />
          ) : (
            <RxTriangleUp style={{ color: "#8D8D8D", scale: "1.5" }} />
          )}
        </button>
        {capacityVis && (
          <ul className="selectFrame">
            <li>
              <button
                className="optionFrame"
                onClick={() => onCapacityFilter("all")}
              >
                Wszystkie
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onCapacityFilter(9)}
              >
                9kg
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onCapacityFilter(8)}
              >
                8kg
              </button>
            </li>
            <li>
              <button
                className="optionFrame"
                onClick={() => onCapacityFilter(10.5)}
              >
                10.5kg
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
