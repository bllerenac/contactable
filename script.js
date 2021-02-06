
import Login from "./assets/scripts/log_in.js";
import NewContact from "./assets/scripts/newContact.js";
import ShowContact from "./assets/scripts/showContact.js";
import Signup from "./assets/scripts/sign_up.js";

const login = Login(".js-content");
const signup = Signup(".js-content");

function addEventListener(){
    login.addFormSubmitListener();
    login.addSignUpViewListener();
    signup.addFormSubmitListener();
    signup.addSigninViewListener();
}

function init() {
    // const create = NewContact(".js-content")
   // const view = ShowContact(".js-content")
    // create.render()
    // create.addNewContactListener()
    // view.render()
    login.render();
    addEventListener();
    //const create = NewContact(".js-content")
    //const view = ShowContact(".js-content")
    //create.render()
    // view.render();
}

init();
