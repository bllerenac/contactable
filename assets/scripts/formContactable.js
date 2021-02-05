export default function FormContactable(parentElement) {
  return {
    render: function () {
      const html = `
         <section>
         <div>
         <h2>Contactable</h2>
         <a class="js-logout" href="#logout"><i>Logout</i></a>
         </div>
         <div>
         <p> Contacs(10)<p>
         <li>Andrew Clark</li>
         <li>Brian Vaughn</li>
         <li>Dan Abramov/li>
         <li>Dominic Gannaway</li>
         <li>Luna Ruan</li>
         <li>Rachel Nabors</li>
         <li>Rick Hanlon</li>
         <li>Yuzhi Zheng</li>
         </div>
         <button type="button">+</button>
         
         </section>
      `;
      const parent = document.querySelector(parentElement);
      parent.innerHTML = html;
    },
  };
}
