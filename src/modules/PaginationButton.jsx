import "../modules/paginationButton.css";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

export default function PaginationButton({
  setPagination,
  pagination,
  searchedProducts,
}) {
  return (
    // show "pokaż więcej"
    <div id="paginationButtons">
      {searchedProducts.length > pagination && (
        <button
          className="paginationButton"
          onClick={() => setPagination(pagination + 6)}
        >
          <p>Pokaż więcej</p>
          <RxTriangleDown />
        </button>
      )}
      {/* show "pokaż mniej" */}
      {pagination > 6 && (
        <button
          className="paginationButton"
          onClick={() => setPagination(pagination - 6)}
        >
          <p>Pokaż mniej</p>
          <RxTriangleUp />
        </button>
      )}
    </div>
  );
}
