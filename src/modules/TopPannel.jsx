import "../modules/topPannel.css";

export default function TopPannel({ onSearchingProducts, search}) {
  return (
    <>
      <h1 id="selectDevice">Wybierz urządzenie</h1>
      <div id="searchSection">
        <input id="searchBox" type="text" placeholder="Search..." value={search} onChange={onSearchingProducts} />
      </div>
    </>
  );
}
