import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/common/Section/Section.styled';
import { Box } from 'components/common/Box/Box.styled';
import { Title } from 'components/common/Title/Title.styled';
import { PhonesList } from 'components/PhonesList/PhonesList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  return (
    <Section>
      <Title>Phonebook</Title>
      <Box>
        <PhoneBookForm />
      </Box>
      <Title>Contacts</Title>
      <Box>
        <Filter />
        <PhonesList />
      </Box>
    </Section>
  );
}
