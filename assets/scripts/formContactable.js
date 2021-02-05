export default function FormContactable(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function () {
      const html = `
         <section>
         <div>
         <h2>Contactable</h2>
         <a class="js-logout" href="#logout"><i>Logout</i></a>
         </div>
         <div class="js-contacts">
         <p> Contacs(10)<p>
         <div>
         <img src="" alt="contact-image">
         <li>Andrew Clark</li>

         <div>
         <img src="" alt="contact-image">
         <li>Brian Vaughn</li>
         </div>
         
         <div>
         <img src="" alt="contact-image">
         <li>Dan Abramov</li>
         </div>
         <div>
         <img src="" alt="contact-image">
         <li>Dominic Gannaway</li>
         </div>
         <div>
         <img src="" alt="contact-image">
         <li>Luna Ruan</li>
         </div>
         <div>
         <img src="" alt="contact-image">
         <li>Rachel Nabors</li>
         </div>
         <div>
         <img src="" alt="contact-image">
         <li>Rick Hanlon</li>
         </div>
         <div>
         <img src="" alt="contact-image">
         <li>Yuzhi Zheng</li>
         </div>
      
         </div>
         <button class="js-NewContact">+</button>
         
         </section>
      `;
      // const parent = document.querySelector(parentElement);
      this.parent.innerHTML = html;
    },
    addFormSubmitListener: function () {
      const button = this.parent.querySelector(".js-NewContact");
      button.addEventListener("click", (e) => {
        console.log("Ya me hiciste click");
      });
    },
  };
}
