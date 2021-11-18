import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h3 class="resto__title">${resto.name}</h3>
  <div class="resto__heading">
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    <div class="resto__info">
      <h4 class="resto__info__heading">Information</h4>
      <h4>resto Name</h4>
      <p>${resto.name}</p>
      <h4>Rating</h4>
      <p>${resto.rating}</p>
      <h4>City</h4>
      <p>${resto.city}</p>
      <h4>Address</h4>
      <p>${resto.address}</p>
      <h4>Menu Category</h4>
      <p>${resto.categories.map((category) => ` ${category.name}`)}</p>
    </div>
  </div>
  <div class="resto__overview">
    <h4>Overview</h4>
    <p>${resto.description}</p>
  </div>
  <div class="resto__menus">
    <h4>Food Menu</h4>
    <p>${resto.menus.foods.map((food) => ` ${food.name}`)}</p>
    <h4>Drink Menu</h4>
    <p>${resto.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
  </div>
  <div class="resto__reviews">
    <h4>Customer Review</h4>
    ${resto.customerReviews.map((review) => `
      <div class="restoInfoList">
          <h4 tabindex="0">${review.name}</h4>
          <p tabindex="0" class="date-review">${review.date}</p>
          <p tabindex="0" class="text-review">${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
    <div tabindex="0" class="card">
        <div class="resto-item__header">
          <img tabindex="0" class="resto-item__header__poster lazyload" crossorigin="anonymous" alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
          </div>
        </div>

        <div tabindex="0" class="card-content">
          <h3 class="card-content-title">${resto.name}</h3>
          <p class="resto-location">${resto.city}</p>
          <p class="resto-description">${resto.description}</p>
          <div class="detail-link">
            <a href="${`#/detail/${resto.id}`}" class="card-a-tag">click for more!</a>
          </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
