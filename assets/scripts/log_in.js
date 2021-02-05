import { login } from "./services/session_service.js";
import STORE from "./store.JS";

export default function Login(parentElement){

  return {

    parent: document.querySelector(parentElement),

    render: function () {
      const html =  `
      <section class="login_home">
        <section class="login_home_image"> <img src="./assets/images/03.jpg" alt="home image"></section>
        <section class="login-container">
          <div class="form_container">
            <div class="form_title-container">
            <a href="#" class="form__tittle">Sign In</a>
            <p>or</p>
            <a href="#" class="form__tittle">Sign Up</a>
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

    addFormSubmitListener: function(){
      
      this.parent.addEventListener("submit", async (e) =>{
        const form = this.parent.querySelector(".js-login-form");
        console.log(form)
        if (form === e.target) {
          e.preventDefault();
          const {email, password} = form;
          try {
            const data = await login(email.value, password.value);
            const {id , email: dataEmail} = data;
            STORE.user = {id , email: dataEmail};
            sessionStorage.setItem("token", data.token);
          } catch(e){
            alert(e.message);
          }
        }
      });
    },

  };
}
