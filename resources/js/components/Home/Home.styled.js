import styled from 'styled-components';

export const HomeStyled = styled.section`
    display: flex;
justify-content: center;
align-items: center;
    h1 {
        width: 40%;
        text-transform: uppercase;
        font-size: 32px;
        font-weight: 600;
        line-height: 120%;
        text-align: left;
        animation: blurAnimation 2s linear infinite;
        span{
        animation: blurAnimationSpan 3s linear infinite;
            color: #9BB537;
        }
        @keyframes blurAnimation {
            0%, 100% {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
            }
            50% {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
            }
        }
        @keyframes blurAnimationSpan {
            0%, 100% {
                text-shadow: 0 0 5px rgba(155, 181, 55, 0.3);
            }
            50% {
                text-shadow: 0 0 20px rgba(155, 181, 55, 1);
            }
        }
    }
`;

