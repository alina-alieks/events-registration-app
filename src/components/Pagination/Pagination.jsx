import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

export default function Pagination({ events, onPageChange, n }) {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel="..."
      pageCount={Math.ceil(events.length / n)}
      marginPagesDisplayed={3}
      onPageChange={onPageChange}
      containerClassName={css.pagination}
      pageClassName={css.pageItem}
      activeClassName={css.active}
    />
  );
}
