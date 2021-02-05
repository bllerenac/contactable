import  NewContact from "./assets/scripts/newContact.js";
import  ShowContact from "./assets/scripts/showContact.js";


function init() {

    const create = NewContact(".js-content")
    const view = ShowContact(".js-content")
    //create.render()
    view.render()
}

init()