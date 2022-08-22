import { Formik, ErrorMessage } from 'formik';
import { PhoneForm, Input } from './PhoneBookForm.styled';
import { Label } from 'components/common/Label/Label.styled';
import { FirstButton } from 'components/common/buttons/FirstButton.styled';
import * as yup from 'yup';
import 'yup-phone';
import { nanoid } from 'nanoid';
import {
  useFetchContactsQuery,
  useCraeteContactsMutation,
} from 'redux/contacts';

const nameValid = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameValid,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3)
    .required(),
  // number: yup.string().phone('UA').min(13).required(),
});

export const PhoneBookForm = () => {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCraeteContactsMutation();
  // const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;
    if (data.find(elem => elem.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      createContact({ id: nanoid(), name, phone });
      resetForm();
    }
  };
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <PhoneForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" />
        </Label>
        <Label htmlFor="name">
          Phone
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <ErrorMessage name="phone" />
        </Label>
        <FirstButton type="submit">Add Contact</FirstButton>
      </PhoneForm>
    </Formik>
  );
};
