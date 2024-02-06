import {createGlobalStyle} from 'styled-components';
import theme from 'tailwindcss/defaultTheme.js';

export const Globalstyle = createGlobalStyle`
    #app {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    body.dark {
        background-color: #050505;
        color: #ffffff;
        transition: all linear 200ms;
    }

    body.light {
        background-color: #f0f0f0;
        color: #000000;
        transition: all linear 200ms;
    }

    ${props => {
        switch (props.theme) {
            case 'light':
                document.body.classList.remove('dark')
                document.body.classList.add('light');
                break;
            case 'dark':
                document.body.classList.add('dark');
                document.body.classList.remove('light');
        }
    }}
`;
