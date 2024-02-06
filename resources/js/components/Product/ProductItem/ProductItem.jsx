/* Default imports */

// Code...
import {
    ProductItemStyled,
    RatingListStyled,
    RecipeFooterStyled,
} from '@/components/Product/ProductItem/ProductItem.styled.js';
import {Button} from '@/components/Button/Button.jsx';
import {FaStar} from 'react-icons/fa';

export const ProductItem = (props) => {

    return (
        <ProductItemStyled image={props.item}>
            <h2>{props.item.title.length > 20
                ? props.item.title.slice(0, 20) + '...'
                : props.item.title}</h2>
            <p>{props.item.description}</p>

            <RecipeFooterStyled>
                <RatingListStyled>
                    <span>{props.item.rating}</span>
                    <FaStar size={15} color={'orange'}/>
                    <FaStar size={15} color={'orange'}/>
                    <FaStar size={15} color={'orange'}/>
                    <FaStar size={15} color={'orange'}/>
                </RatingListStyled>
                <Button>See recipe</Button>
            </RecipeFooterStyled>
        </ProductItemStyled>
    );
};
