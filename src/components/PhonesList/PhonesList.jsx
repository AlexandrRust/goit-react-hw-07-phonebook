import { List } from './PhonesList.styled';
import { ItemLi } from './Item/ItemLi.styled';
import { SecondButton } from 'components/common/buttons/SecondButton.styled';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { remove } from 'redux/contactsSlice';

export const PhonesList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };
  const deleteContact = id => {
    dispatch(remove(id));
  };

  return (
    <List>
      {getVisibleContacts().map(({ name, id, number }) => (
        <ItemLi key={id}>
          {name}: {number}{' '}
          <SecondButton
            type="button"
            name={name}
            onClick={() => deleteContact(id)}
          >
            delete
          </SecondButton>
        </ItemLi>
      ))}
    </List>
  );
};
