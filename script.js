const form = document.querySelector('form');
const contactList = document.querySelector('#contact-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
  `;

    contactList.appendChild(contact);

    form.reset();
});
