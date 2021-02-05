import FormContact from './formConctact.js';

export default function NewContact(parentElement) {
    console.log('hola')
    return {
        parent: document.querySelector(parentElement),
        render: function() {
            this.parent.innerHTML = FormContact('Create new contact');
         }
        // addFormSubmitListeners: function() {
        //     this.parent.addEventListener('submit', (e) => {
        //         const form = this.parent.querySelector(".js-login-form");
        //         if (form === e.target) {
        //             e.preventDefault()
        //             const { email, password} = form;
        //             try{
        //                 const data = await login(email.value, password.value);
        //                 const {id, email: dataEmail, first_name, last_name, phone} = data;
        //                 STORE.user = {id, email: dataEmail, first_name, last_name, phone};
        //                 sessionStorage.setItem('token', data.token);
        //                 if(data.token) {
        //                     let main = Main("js-content");
        //                     main.render()
        //                 }
        //             }catch(e){
        //                 alert(e.message);
        //             }
        //         }
        //     });
        // }
    }
}