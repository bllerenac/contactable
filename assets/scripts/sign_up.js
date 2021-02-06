import Login from "./log_in.js";
import { signup } from "./services/session_service.js";
import STORE from "./store.js";

export default function Signup(parentElement){

  return {

    parent: document.querySelector(parentElement),

    render: function () {
      const html =  `
          <div class="form_container">
            <div class="form_title-container">
            <a href="#" class="js-signin form__tittle">Sign In</a>
            <p>or</p>
            <a href="#" class="js-signup form__tittle active">Sign Up</a>
            </div>
            <form class="js-login-form">
              <div class="form_input_data">
                <label>USERNAME</label><br>
                <input type="text" name="email" placeholder="email">
              </div>
              <div class="form_input_data">
                <label class="form_label">PASSWORD</label><br>
                <input type="password" name="password" placeholder="*********">
              </div>
              <div>
                <button class="from__button" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
      `;
      this.parent.innerHTML = html;
    },

    addFormSubmitListener: function(){
      
      this.parent.addEventListener("submit", async (e) =>{
        const form = this.parent.querySelector(".js-login-form");
        console.log("click")
        if (form === e.target) {
          e.preventDefault();
          const {email, password} = form;
          try {
            const data = await signup(email.value, password.value);
            const {id , email: dataEmail} = data;
            STORE.user = {id , email: dataEmail};
            sessionStorage.setItem("token", data.token);
          } catch(e){
            alert(e.message);
          }
        }
      });
    },

    addSigninViewListener: function() {
      this.parent.addEventListener("click", (e) => {
        const signupLink = this.parent.querySelector(".js-signup");
        const loginLink = this.parent.querySelector(".js-signin");
        console.log("hola mundo")
        if (loginLink === e.target) {
          e.preventDefault();
          const login = Login(".js-content");
          signupLink.classList.remove("active");
          login.render();
        }
      })
    },

  };
}