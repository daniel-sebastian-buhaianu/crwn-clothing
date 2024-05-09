import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
