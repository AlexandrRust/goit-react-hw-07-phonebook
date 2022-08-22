import { Label } from 'components/common/Label/Label.styled';
import { Input } from 'components/common/Input/Input.styled';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addFilter } from 'redux/contacts';

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
      <Input type="text" name="filter" value={filter} onChange={changeFilter} />
    </Label>
  );
};
