import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41079066-0341c17d8bd684537c8a66e3e';

export default class NewsApiService {
  constructor() {
    this.searchAnimal = '';
    this.page = 1;
    this.per_page = 40;
  }

  fetchPegs() {
    const option = {
      key: API_KEY,
      safesearch: true,
      page: `${this.page}`,
      per_page: `${this.per_page}`,
    };
    return axios
      .get(BASE_URL, { params: option })
      .then(response => {
        // console.log(response.data.hits);
        this.incrementPage();
        return response.data.totalHits;
      })
      .catch(error => {
        console.log(error);
        console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      });
  }

  fetchHits() {
    const queryParams = {
      key: API_KEY,
      q: `${this.searchAnimal}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${this.page}`,
      per_page: `${this.per_page}`,
    };
    return axios
      .get(BASE_URL, { params: queryParams })
      .then(response => {
        // console.log(response.data.hits);
        this.incrementPage();
        return response.data.hits;
      })
      .catch(error => {
        console.log(error);
        console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get animal() {
    return this.searchAnimal;
  }

  set animal(newSearchAnimal) {
    this.searchAnimal = newSearchAnimal;
  }
}

// import SlimSelect from 'slim-select';

// import '/node_modules/slim-select/dist/slimselect.css';

// import '/node_modules/slim-select/dist/slimselect.min.js';

// axios.defaults.headers.common['x-api-key'] =
//   'live_QnYFBW48Rw6I7bGfsFA1QTbYdWtKQKT86j8h8KpF4TCTSz8rp4W4DFTADxItBVig';

// const BASE_URL = 'https://api.thecatapi.com/v1/';
// const END_POINTS = 'breeds';

// const KEY =
//   'live_QnYFBW48Rw6I7bGfsFA1QTbYdWtKQKT86j8h8KpF4TCTSz8rp4W4DFTADxItBVig';

// export function fetchBreeds() {
//   return fetch(`${BASE_URL}${END_POINTS}?api_key=${KEY}`).then(responce => {
//     if (!responce.ok) {
//       throw new Error(responce.statusText);
//     }

//     new SlimSelect({
//       select: '#selectElement',
//     });
//     return responce.json();
//   });
// }

// export function fetchCatByBreed(breedId) {
//   const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

//   return fetch(`${BASE_URL}?api_key=${KEY}&breed_ids=${breedId}`).then(
//     responce => {
//       if (!responce.ok) {
//         throw new Error(responce.statusText);
//       }
//       return responce.json();
//     }
//   );
// }
