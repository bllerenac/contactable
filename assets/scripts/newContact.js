import FormContact from './renders/formConctact.js';
import {createNewContactAPI} from "./services/contact_Transaction.js";
import STORE from "./store.js";

export default function NewContact(parentElement) {
    return {
        parent: document.querySelector(parentElement),
        render: function() {
            this.parent.innerHTML = FormContact('Create new contact');
         },

        addNewContactListener: function(){

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
                        const newData = await createNewContactAPI(name.value, number.value, email.value, relation.value);
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