import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';

const refs = {
  formElem: document.querySelector('.work-togethe-form'),
};

refs.formElem.addEventListener('submit', async event => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get('email');
  const comment = formData.get('comment');

  const requestBody = { email, comment };

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      requestBody
    );
    if (response.status === 201) {
      const modal = basicLightbox.create(`
                <div class="modal">
          <button class="modal-close"><svg class="menu-close-icon" width="34" height="34">
      <use href="/img/icons.svg#icon-close"></use>
    </svg></button>
          <h2 class="modal-title">Thank you for your interest in cooperation!</h2>
          <p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
        </div>
        `);

      modal.show();
      document
        .querySelector('.modal-close')
        .addEventListener('click', () => modal.close());

      form.reset();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to send request. Please check your input and try again.',
      position: 'topRight',
    });
    console.error('Form submission error:', error);
  }
});
