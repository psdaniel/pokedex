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
        opacity: 0.1;
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

    h1 {
        text-transform: uppercase;
        color: #FFDE00;
    }
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 55rem;

    overflow-y: scroll;
    max-height: 75vh;

    &::-webkit-scrollbar {
        display: none;
      }


`;

export const Card = styled.div`
    box-shadow: 0 8px 6px -6px black;
    background-color: #3B4CCA;
    border-radius: 8px;
    padding: .5rem;
    margin-bottom: 1rem;
    opacity: 0.8;

    
    transition: transform 0.25s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    

    display: flex;
    justify-content: center;

    h2 {
        text-transform: uppercase;
        font-family: Roboto, sans-serif;
        text-shadow: 8px 6px -6px black;
        color: #FFDE00;
    }
    
`;