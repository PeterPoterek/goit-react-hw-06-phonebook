import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';
import { ContactListContainer, ContactListUl } from './ContactListStyles';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);

  console.log(contacts);
  return (
    <ContactListContainer>
      <ContactListUl>{}</ContactListUl>
    </ContactListContainer>
  );
};

export default ContactList;
