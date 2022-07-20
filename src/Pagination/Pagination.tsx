import './Pagination.css';
import ReactPaginate from 'react-paginate';

type PagianationProps = {
  onChangePage: (event: number) => void;
};
const Pagination: React.FC<PagianationProps> = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className="paginate-root"
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={5}
      />
    </>
  );
};

export default Pagination;
