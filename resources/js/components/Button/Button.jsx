/* Default imports */

// Code...
import {ButtonStyled} from '@/components/Button/Button.styled.js';

export const Button = ({children}) => {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    );
};
