import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesArray } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesArray = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategoriesArray(categoriesArray));
    };

    getCategoriesArray();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
