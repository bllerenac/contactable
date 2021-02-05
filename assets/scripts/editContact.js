import FormContact from './renders/formConctact.js';
import {editContactAPI} from "./services/contact_Transaction";

export default function editContact(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function() {
      this.parent.innerHTML = FormContact('Create new contact');
    },

    editContactListener: function(){

      this.parent.addEventListener("submit", async (e) =>{

        const form = this.parent.querySelector(".js-contact-form");

        /*  alert(form.name.value)
            alert(form.number.value)
            alert(form.email.value)
            alert(form.relation.value)
        */

        if (form === e.target) {
          e.preventDefault();
          const {name, number, email, relation} = form;

          try {
            const newData = await editContactAPI(name.value, number.value, email.value, relation.value);
            // const {id , email: dataEmail} = newData;
            // STORE.user = {id , email: dataEmail};
            // sessionStorage.setItem("token", data.token);
          } catch(e){
            alert(e.message);
          }
        }
      });
    },
  }
}