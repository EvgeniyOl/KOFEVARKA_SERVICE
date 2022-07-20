import './Categories.css';
import { useDispatch } from 'react-redux';
import { setCategoriesType } from '../../../Redux/Slices/filterSlice';
import { Button } from 'react-bootstrap';

const categories = [
  'Все категории',
  'Эспрессо смеси 1кг',
  'Эспрессо смеси 250г',
  'Моносорта 1кг',
  'Моносорта 250г',
  'Химия',
];

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
            <Button
              size="sm"
              key={`${categoryName}_${index}`}
              onClick={() => onSelectItem(index)}
              className={value === index ? 'btn active' : 'btn btn-warning'}
            >
              {categoryName}
            </Button>
          ))}
      </div>
    </>
  );
};

export default Categories;
