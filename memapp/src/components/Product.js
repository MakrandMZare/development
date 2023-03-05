import { FavoriteBorderRounded, SearchRounded, ShoppingCartRounded } from '@material-ui/icons';
import React from 'react';
import { mobile } from "../responsive";
import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex; 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({ width: "90%" })}
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 50%;
    z-index: 2;
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;
    &:hover {
        background-color: lightgray;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartRounded />
                </Icon>
                <Icon>
                    <SearchRounded />
                </Icon>
                <Icon>
                    <FavoriteBorderRounded />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
