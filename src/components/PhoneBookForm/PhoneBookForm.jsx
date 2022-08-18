import { Formik, ErrorMessage } from 'formik';
import { PhoneForm, Input } from './PhoneBookForm.styled';
import { Label } from 'components/common/Label/Label.styled';
import { FirstButton } from 'components/common/buttons/FirstButton.styled';
import * as yup from 'yup';
import 'yup-phone';
import { nanoid } from 'nanoid';
import { add } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

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
  number: yup.string().phone('UA').min(13).required(),
});

export const PhoneBookForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (contacts.find(elem => elem.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(add({ id: nanoid(), name, number }));
      resetForm();
    }
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
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
          <Input type="tel" name="number" />
          <ErrorMessage name="number" />
        </Label>
        <FirstButton type="submit">Add Contact</FirstButton>
      </PhoneForm>
    </Formik>
  );
};
