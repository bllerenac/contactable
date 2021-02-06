import li_contacts from "./renders/li_contacts.js";

import STORE from "./store.js";

import { listContacts } from "./services/list_Contacts.js";

export default function FormContactable(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function () {
      const html = `
         <section>
         <div>
         <h2>Contactable</h2>
         <a class="js-logout" href="#logout"><i>Logout</i></a>
         </div>
         <div class="js-contacts">
         <p> Contacs(10)<p>
          ${li_contacts()}
         </div>
         <button class="js-NewContact">+</button>
         
         </section>
      `;
      this.parent.innerHTML = html;
    },
    addFormSubmitListener: function () {
      const button = this.parent.querySelector(".js-NewContact");
      button.addEventListener("click", async (e) => {
        console.log("Ya me hiciste click");
      });
    },
  };
}
