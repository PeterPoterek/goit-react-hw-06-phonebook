import {
  ContactListLi,
  ContactListName,
  ContactListNumber,
  ContactListRemoveButton,
} from './ContactListItemStyles';

const ContactListItem = () => {
  return (
    <ContactListLi>
      <ContactListName>{}</ContactListName>
      <ContactListNumber>{}</ContactListNumber>
      <ContactListRemoveButton>Delete</ContactListRemoveButton>
    </ContactListLi>
  );
};

export default ContactListItem;
