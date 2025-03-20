// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

const refs = {
  reviewsListElem: document.querySelector('.reviews-list-js'),
};

async function getAllReviews() {
  try {
    const res = await axios2.get('/reviews');
    return res.data;
    // return axios2.get('/reviews').then(res => res.data);
  } catch (error) {
    console.error('error geting reviews', error);
    iziToast.error({
      title: 'Error',
      message: 'Not found',
      position: 'topRight',
    });
    return null;
  }
}

getAllReviews().then(data => {
  if (!data || data.length === 0) {
    refs.reviewsListElem.innerHTML = '<p class="error-message">Not found</p>';
    return;
  }

  const markup = reviewsTemplate(data);
  refs.reviewsListElem.innerHTML = markup;
});

function reviewTemplate(feedback) {
  const { author, avatar_url, review } = feedback;
  return `<li class="reviews-list-item">
        <img class="reviews-list-img" src="${avatar_url}" alt="photo" />
        <h3 class="reviews-list-subtitle">${author}</h3>
        <p class="reviews-list-text">${review}</p>
      </li>`;
}

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
}
