import ReactPaginate from 'react-paginate';

export default function Pagination({page, onChangePage, amountProducts}){
  let amountPage = Math.ceil(amountProducts / 4);
  return(
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected+1)}
    pageRangeDisplayed={8}
    pageCount={amountPage}
    previousLabel="<"
    renderOnZeroPageCount={null}
    pageClassName="pagination"
    activeClassName="active-page"
    previousClassName="pagination"
    nextClassName="pagination"
  />
  )
}
