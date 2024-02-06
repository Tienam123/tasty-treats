/* Default imports */

// Code...
import {ProductItem} from '@/components/Product/ProductItem/ProductItem.jsx';
import {ProductListStyled} from '@/components/Product/ProductList/ProductList.styled.js';

export const ProductList = (props) => {
    return (
        <ProductListStyled>
            {props.recipes.map(el => <ProductItem key={el.id} item={el}/>)}
        </ProductListStyled>
    );
};
