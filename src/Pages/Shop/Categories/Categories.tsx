import './Categories.css';
import { useDispatch } from 'react-redux';
import { setCategoriesType } from '../../../Redux/Slices/filterSlice';

const categories = ['Все категории', 'Кофе', 'Химия'];

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};
const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const dispatch = useDispatch();

  const onSelectItem = (index: number) => {
    onClickCategory(index);
    dispatch(setCategoriesType(index));
  };

  return (
    <>
      <div className="categories">
        {categories &&
          categories.map((categoryName, index) => (
            <button
              key={`${categoryName}_${index}`}
              onClick={() => onSelectItem(index)}
              className={value === index ? 'btn active' : 'btn btn-warning'}
            >
              {categoryName}
            </button>
          ))}
      </div>
    </>
  );
};

export default Categories;
