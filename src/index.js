// import NewsApiService from './animal-api';

// const searchForm = document.querySelector('.search-form');
// const btnSubmit = document.querySelector('button');
// const loadMore = document.querySelector('.load-more');
// const divGallery = document.querySelector('.gallery');

// const newsApiService = new NewsApiService();

// searchForm.addEventListener('submit', handlerSearch);
// loadMore.addEventListener('click', onLoadMore);
// let totalHits = 500;
// let hits = 0;

// loadMore.style.display = 'none';
// divGallery.style.display = 'flex';
// divGallery.style.flexWrap = 'wrap';

// function handlerSearch(e) {
//   e.preventDefault();

//   newsApiService.animal = e.currentTarget.searchQuery.value;

//   if (newsApiService.animal === '') {
//     return alert('Oops!');
//   }

//   newsApiService.resetPage();
//   newsApiService.fetchHits().then(hits => {
//     clearDivContainer();
//     createMarkupAnimals(hits);

//     if (hits.length < totalHits) {
//       onLoaderVisible();
//     } else if (hits.length === totalHits) {
//       onLoaderHidden();
//     }
//   });
// }

// function onLoadMore() {
//   newsApiService.fetchHits().then(createMarkupAnimals);
// }

// function renderMarkup(hits) {
//   // const animalHits = hits[0];

//   return hits
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `<div class="photo-card">
//     <img src="${webformatURL}" alt="${tags}" width = "300" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Likes ${likes}</b>
//       </p>
//       <p class="info-item">
//         <b>Views ${views}</b>
//       </p>
//       <p class="info-item">
//         <b>Comments ${comments}</b>
//       </p>
//       <p class="info-item">
//         <b>Downloads ${downloads}</b>
//       </p>
//     </div>
//   </div>`
//     )
//     .join('');
// }

// function createMarkupAnimals(hits) {
//   divGallery.insertAdjacentHTML('beforeend', renderMarkup(hits));
// }

// function clearDivContainer() {
//   divGallery.innerHTML = '';
// }

// function onLoaderVisible() {
//   loadMore.style.display = 'block';
// }

// function onLoaderHidden() {
//   loadMore.style.display = 'none';
// }

// // ----------------------------------------------------------------------------------

import axios from 'axios';

const API_KEY = '41079066-0341c17d8bd684537c8a66e3e';
const BASE_URL =
  'https://pixabay.com/api/?key=41079066-0341c17d8bd684537c8a66e3e';

const queryParams = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 'page',
  per_page: 'per_page',
};

// async function foo() {
//   const data = await axios(BASE_URL);
//   console.log(data);
// }
// foo();

// те саме що і

// axios(BASE_URL).then(response => console.log(response));

// 1
// async function foo() {
//   try {
//     const data = await axios(BASE_URL);
//     console.log(data.config);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log('end');
// }

// foo();

// 2
// async function foo() {
//   const response = await axios(BASE_URL);
//   return response.data;
// }

// foo()
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

// 3
// async function foo() {
//   const response = await axios(BASE_URL);
//   return response.data;
// }

// async function result() {
//   try {
//     const data = await foo();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// result();

// async function getRequst() {
//   const value = await axios(BASE_URL)

// }
