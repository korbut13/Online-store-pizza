import ReactPaginate from 'react-paginate';

export default function Pagination({page, onChangePage}){

  return(
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected+1)}
    pageRangeDisplayed={8}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
    pageClassName="pagination"
    activeClassName="active-page"
    previousClassName="pagination"
    nextClassName="pagination"
  />
  )
}
