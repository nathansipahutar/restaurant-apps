import RestaurantSource from '../../data/restaurant-source';
// eslint-disable-next-line import/named
import { createRestoItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div id="resto" class="resto">
        <h2 class="title" tabindex="0">Explore Restaurants</h2>
        <div id="content-card"></div>   
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantContainer = document.querySelector('#content-card');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ListRestaurant;
