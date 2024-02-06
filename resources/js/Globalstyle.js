import {createGlobalStyle} from 'styled-components';

export const Globalstyle = createGlobalStyle`
    #app {
        max-width: 1200px;
        margin: 0 auto;
    }
    body {
        padding: 0 15px;
        transition: all linear 500ms;
        background: ${props => {
          if (props.theme) {
              localStorage.setItem('theme',true)
              return '#050505'
          } else {
              localStorage.setItem('theme','')
            return '#f0f0f0'
          }
        }};
        color: ${props => {
            if (props.theme) {
                return '#fff'
            } else {
                return '#000'
            }
        }};
    }

`
