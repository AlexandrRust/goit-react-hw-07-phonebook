import { List } from './PhonesList.styled';
import { ItemLi } from './Item/ItemLi.styled';
import { SecondButton } from 'components/common/buttons/SecondButton.styled';
import { useSelector } from 'react-redux/es/exports';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contacts';

export const PhonesList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();
  const filter = useSelector(state => state.filter.filter);
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();

    if (data) {
      return data.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizeFilter)
      );
    }
  };

  return (
    <List>
      {data &&
        getVisibleContacts().map(({ name, id, phone }) => (
          <ItemLi key={id}>
            {name}: {phone}{' '}
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
