import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import {setCurrentPage} from '../redux/filters/slice';
import { selectFilter } from '../redux/filters/selectors';

const Pagination:React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectFilter).currentPage;

  const onChangePage = (id:number) => {
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
};

export default Pagination;
