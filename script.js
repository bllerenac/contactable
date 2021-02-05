import Login from "./assets/scripts/log_in.js";


function init(){
  const login = Login(".js-content");
  login.render();
  login.addFormSubmitListener(".js-content");
}
init();