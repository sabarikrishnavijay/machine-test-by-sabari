
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getProductItem, } from './Features/ProductSlice';
import ProductItem from './Pages/Product-Item/ProductItem';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductItem())
  }, [dispatch])

  return (

    <div className="App">
      <ProductItem />
    </div>
  );
}

export default App;
