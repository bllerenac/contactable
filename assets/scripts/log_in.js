import { login } from "./services/session_service.js";
import Signup from "./sign_up.js";
import FormContactable from "./formContactable.js";

import STORE from "./store.js";

import { listContacts } from "./services/list_Contacts.js";

export default function Login(parentElement) {
  return {
    parent: document.querySelector(parentElement),

    render: function () {
      const html = `
      <section class="login_home">
        <section class="login_home_image"> <img src="./assets/images/03.jpg" alt="home image"></section>
        <section class="login-container">
          <div class="form_container">
            <div class="form_title-container">
            <a href="#" class="js-signin form__tittle active">Sign In</a>
            <p>or</p>
            <a href="#" class="js-signup form__tittle">Sign Up</a>
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
                <button class="from__button" type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      `;
      this.parent.innerHTML = html;
    },

    addFormSubmitListener: function () {
      this.parent.addEventListener("submit", async (e) => {
        const form = this.parent.querySelector(".js-login-form");
        console.log("click");
        if (form === e.target) {
          e.preventDefault();
          const { email, password } = form;
          try {
            const data = await login(email.value, password.value);
            const { id, email: dataEmail } = data;
            STORE.user = { id, email: dataEmail };
            sessionStorage.setItem("token", data.token);
            const list = FormContactable(".js-content");

            const contacs = await listContacts();
            STORE.contacts = contacs;
            console.log(STORE);
            console.log(STORE.contacts);
            console.log(STORE);

            list.render();
            list.addFormSubmitListener();
          } catch (e) {
            alert(e.message);
          }
        }
      });
    },

    addSignUpViewListener: function() {
      this.parent.addEventListener("click", (e) => {
        const signupLink = this.parent.querySelector(".js-signup");
        const loginLink = this.parent.querySelector(".js-signin")
        console.log("hola mundo")
        if (signupLink === e.target) {
          e.preventDefault();
          const signup = Signup(".login-container");
          loginLink.classList.remove("active");
          signup.render();
        }
      })
    },
  };
}
