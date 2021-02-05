import ViewProfile from './renders/profile.js';

export default function ShowContact(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function() {
      this.parent.innerHTML = ViewProfile('Contact Detail');
    }
  }
}