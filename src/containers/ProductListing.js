import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent';
import { setProducts, fetchProducts } from '../redux/actions/productActions';

export const ProductListing = () => {
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(fetchProducts())
     },[])
    console.log(products)
  return (
    <div className="ui grid container">
       <ProductComponent/>
    </div>
  )
}
