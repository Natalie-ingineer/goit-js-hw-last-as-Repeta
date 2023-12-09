import NewsApiService from './animal-api';

// import SlimSelect from 'slim-select';

// import '/node_modules/slim-select/dist/slimselect.css';

// import '/src/loader.css';

// import Notiflix from 'notiflix';

// import Notiflix from 'notiflix/dist/notiflix-aio-3.2.6.min.js';

// Notiflix.Notify.init({
//   width: '280px',
//   position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
//   distance: '10px',
//   opacity: 1,
//   borderRadius: '5px',
//   rtl: false,
//   timeout: 3000,
//   messageMaxLength: 110,
//   backOverlay: false,
//   backOverlayColor: 'rgba(0,0,0,0.5)',
//   plainText: true,
//   showOnlyTheLastOne: false,
//   clickToClose: false,
//   pauseOnHover: true,

//   ID: 'NotiflixNotify',
//   className: 'notiflix-notify',
//   zindex: 4001,
//   fontFamily: 'Quicksand',
//   fontSize: '13px',
//   cssAnimation: true,
//   cssAnimationDuration: 400,
//   cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
//   closeButton: false,
//   useIcon: true,
//   useFontAwesome: false,
//   fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
//   fontAwesomeIconSize: '34px',

//   failure: {
//     background: '#ff5549',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-failure',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-times-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(255,85,73,0.2)',
//   },
// });

const searchForm = document.querySelector('.search-form');
const btnSubmit = document.querySelector('button');
const loadMore = document.querySelector('.load-more');
const divGallery = document.querySelector('.gallery');

const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', handlerSearch);
loadMore.addEventListener('click', onLoadMore);

function handlerSearch(e) {
  e.preventDefault();

  newsApiService.animal = e.currentTarget.searchQuery.value;

  newsApiService.resetPage();
  newsApiService.fetchArticles().then(hits => {
    clearDivContainer();
    createMarkupAnimals(hits);
  });
}
// btnSubmit.addEventListener('click', handlerSubmit);

function onLoadMore() {
  newsApiService.fetchArticles().then(createMarkupAnimals);
}

function renderMarkup(hits) {
  // const animalHits = hits[0];

  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" width = "300" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes'${likes}'</b>
      </p>
      <p class="info-item">
        <b>Views'${views}'</b>
      </p>
      <p class="info-item">
        <b>Comments'${comments}'</b>
      </p>
      <p class="info-item">
        <b>Downloads'${downloads}'</b>
      </p>
    </div>
  </div>`
    )
    .join('');
}

function createMarkupAnimals(hits) {
  divGallery.insertAdjacentHTML('beforeend', renderMarkup(hits));
}

function clearDivContainer() {
  divGallery.innerHTML = '';
}

// ----------------------------------------------------------------------------------

// function createMarkupCat(data) {
//   const cat = data[0].breeds[0];

//   const { name, description, temperament } = cat;

//   return `
//   <img src="${data[0].url}" alt="${name}" width="450">
//   <h2>${name}</h2>
//   <p>${description}</p>
//   <p>Temperament: ${temperament}</p>
//   `;
// }

// function onLoaderVisible() {
//   select.style.display = 'none';
//   loader.style.display = 'block';
//   loader.textContent = '';
//   div.style.display = 'none';
// }

// function onLoaderHidden() {
//   loader.style.display = 'none';
//   div.style.display = 'block';
// }
