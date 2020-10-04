import styled, { css } from 'styled-components';

import backgroundImg from '../../assets/backgroundImg.png';

export const Container = styled.div`

    min-height: 100vh;
    min-width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &::after {
        content: "";
        background: url(${backgroundImg}) no-repeat center;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;   
    }
    
`;

export const Header = styled.div`
    text-align: center;
`;

export const CardContainer = styled.div`
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .card-container {
        display: flex;
        flex-direction: column;
        background-color: #95dada;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 25px;
        cursor: pointer;
        -moz-osx-font-smoothing: grayscale;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
    }
    
    .card-container:hover {
        transform: scale(1.05);
    } 
`;

export const Card = styled.div`
    
`;