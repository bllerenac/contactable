export default function FormContactable(parentElement) {
  return {
    render: function () {
      const html = `
         <section>
         <h2>Contactable</h2>
         </section>
      `;
      const parent = document.querySelector(parentElement);
      parent.innerHTML = html;
    },
  };
}
