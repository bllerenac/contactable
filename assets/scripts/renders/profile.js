export default function ViewProfile(title){
  return `
            <section>
               <div class="title">
                 <h2 class="font-regular">${title}</h2>
               </div>
               <div class="profile">
                  <div class="profile__header">
                    <img src="" alt="profile">
                    <h4>Brian Vaughn</h4>
                    <p>Friends</p>
                  </div>
                  <div class="profile__data">
                    <div><p>Number:</p><span>987654321</span></div>
                    <div><p>Email:</p><span>brian@react.com</span></div>
                  </div>  
               </div>
               <div class="footer">
                  <button >Back</button>
                  <button class="delete-contact" >Delete</button>
                  <button type="submit">Edit</button>
               </div>
            </section>
            `;
}
