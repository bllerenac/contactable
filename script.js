import FormContactable from "./assets/scripts/formContactable.js";
import Login from "./assets/scripts/log_in.js";
import NewContact from "./assets/scripts/newContact.js";
import ShowContact from "./assets/scripts/showContact.js";

function init() {
    // const create = NewContact(".js-content")
   // const view = ShowContact(".js-content")
    // create.render()
    // create.addNewContactListener()
    // view.render()
    const login = Login(".js-content");
    login.render();
    login.addFormSubmitListener(".js-content");
    //const create = NewContact(".js-content")
    //const view = ShowContact(".js-content")
    //create.render()
    // const list = FormContactable(".js-content");
    // list.render();
    // list.addFormSubmitListener();
    // view.render();
}

init();
