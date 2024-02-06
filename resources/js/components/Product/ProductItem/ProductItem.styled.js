import styled from 'styled-components';
export const ProductItemStyled = styled.li`
    background:linear-gradient(1.08deg, rgba(5, 5, 5, 0.6) 4.724%,rgba(5, 5, 5, 0) 108.828%), url(${
    props => {
        return props.image.thumb
    }
}) 0 0 no-repeat;
width: 250px;
    padding: 10px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
h2 {
    color: rgb(248, 248, 248);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 8px;
}
p {
    color: rgb(248, 248, 248);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    margin-bottom: 24px;
}
`;
export const RatingListStyled = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    color: white;
`
export const RecipeFooterStyled = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;

`
