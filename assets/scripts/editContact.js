import FormContact from './renders/formConctact.js';

export default function editContact(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function() {
      this.parent.innerHTML = FormContact('Create new contact');
    }
  }
}