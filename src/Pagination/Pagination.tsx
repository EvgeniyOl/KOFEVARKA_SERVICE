import './Pagination.css';

type PagianationProps = {
  itemsCount: number;
  onChangePage: (event: number) => void;
  itemsperPage: number;
};
const Pagination: React.FC<PagianationProps> = ({
  itemsCount,
  onChangePage,
  itemsperPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemsCount / itemsperPage); i++) {
    pageNumbers.push(i);
  }
  const onClickPage = (numbers: number) => {
    onChangePage(numbers);
  };

  return (
    <>
      <ul className="page-list">
        {pageNumbers.map((numbers) => (
          <a
            key={numbers}
            className="page-links"
            onClick={() => onClickPage(numbers)}
          >
            <li>{numbers}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
