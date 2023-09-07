import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import {setCurrentPage, selectFilter} from '../redux/slices/filterSlice';

export default function Pagination(){
  const dispatch = useDispatch();
  const currentPage = useSelector(selectFilter).currentPage;

  const onChangePage = (id) => {
    dispatch(setCurrentPage(id))
  }

  return(
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected+1)}
    forcePage={currentPage-1}
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
