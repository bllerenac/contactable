export default function FormContact(title){
    return `
            <section>
               <div class="title">
                 <h2 class="font-regular">${title}</h2>
               </div>
               <form class="js-contact-form form-contact">
                 <div>
                   <input type="text" name="name" placeholder="Name">
                   <label class="error-name"></label>
                 </div>
                <div>
                   <input type="tel" name="number" placeholder="Number" >
                   <label class="error-number"></label>
                </div>
                <div>
                   <input type="email" name="email" placeholder="Email">
                   <label class="error-number"></label>
                </div>
                <div>
                   <input type="text" name="relation" placeholder="Relation">
                   <label class="error-relation"></label>   
                </div>
                <div class="footer">
                   <button >Cancel</button>
                   <button type="submit">Save</button>
                </div>
               </form>
            </section>
            `;
}
