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
          coloca aqui tu metodo 
      
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
      // listContactable: function() {
      //
      // }
      //   <div>
      //     <img src="" alt="contact-image">
      //       <li>Rick Hanlon</li>
      //   </div>
      // }





  };
}
