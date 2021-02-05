import FormContactable from "./assets/scripts/formContactable.js";
import NewContact from "./assets/scripts/newContact.js";
// console.log("hola2");
function init() {
  //   console.log("hola2");
  // const create = NewContact(".js-content")
  const list = FormContactable(".js-content");
  list.render();
  list.addFormSubmitListener();
}

init();
