/* eslint-disable no-undef */
import FavoriteRestoSearchPresenter from '../src/scripts/utils/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching resto', () => {
  let presenter;
  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="restos">
                </ul>
            </div>
        </div>
      `;
  };
  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, 'searchResto');
    presenter = new FavoriteRestoSearchPresenter({ favoriteResto: FavoriteRestoIdb });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchResto('resto a');

    expect(presenter.latestQuery)
      .toEqual('resto a');
  });

  it('should ask the model to search for liked resto', () => {
    searchResto('resto a');

    expect(FavoriteRestoIdb.searchResto)
      .toHaveBeenCalledWith('resto a');
  });

  it('should show the found resto', () => {
    presenter._showFoundResto([{ id: 1 }]);

    const foundResto = document.querySelectorAll('.resto');

    expect(foundResto.length).toEqual(1);
  });

  it('should show the name of the found restaurants', () => {
    presenter._showFoundResto([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundResto(
      [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
    );

    const restoNames = document.querySelectorAll('.resto__title');
    expect(restoNames.item(0).textContent).toEqual('Satu');
    expect(restoNames.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found restaurant without name', () => {
    presenter._showFoundResto([{ id: 1 }]);

    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('-');
  });
});
