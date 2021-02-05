import { login } from "./services/session_service.js";

export default function Login(parentElement){

  return {
      
    parent: document.querySelector(parentElement),

    render: function () {
      const html =  `
      <section>
      <h2>Login</h2>
      <form class="js-login-form">
        <div>
          <label>Username</label>
          <input type="text" name="username" placeholder="username">
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" placeholder="*********">
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </section>
      `;
      this.parent.innerHTML = html;
    },

    addFormSubmitListener: function(){
      this.parent.addEventListener("submit", async (e) =>{
        const form = this.parent.querySelector(".js-login-form");
        if (form === e.target) {
          e.preventDefault();
          const {email,password} = form;
          try {
            const data = await login(email.value, password.value);
            sessionStorage.setItem("token", data.token);
          } catch(e){
            alert(e.message);
          }
        }
      });
    },

  };
}
