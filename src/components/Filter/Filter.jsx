import { Label } from 'components/common/Label/Label.styled';
import { Input } from 'components/common/Input/Input.styled';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(addFilter(filterValue));
  };
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={changeFilter}
      />
    </Label>
  );
};
