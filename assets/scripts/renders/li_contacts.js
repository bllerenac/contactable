import STORE from "../store.js";
export default function li_contacts() {
  console.log(STORE.contacts);
  const contacs_list = [];
  STORE.contacts.forEach((element) => {
    let html = `
      <div class="contact">
        <div class="default-image">
          <img src="assets/icons/default-profile.png" alt="contact-image">
        </div>
        <li>${element.name}</li>
        <div class="star-icon">
          <i class="far fa-star"></i>
        </div>
      </div>
`;
    contacs_list.push(html);
  });
  return contacs_list.join();
}
