import Login from "./assets/scripts/log_in.js";
import  NewContact from "./assets/scripts/newContact.js";
import  ShowContact from "./assets/scripts/showContact.js";


function init() {
    const login = Login(".js-content");
    // login.render();
    // login.addFormSubmitListener(".js-content");
    // const create = NewContact(".js-content")
   const view = ShowContact(".js-content")
    // create.render()
    // create.addNewContactListener()
    view.render()
}

init();

