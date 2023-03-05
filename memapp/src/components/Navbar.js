import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import Logo from '../assets/images/m-logo.png';
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
    height: 60px;
    background-color: black;
    ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    bakcground-color: lightgray;
    ${mobile({ marginLeft: "20px" })}
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
const Center = styled.div`
    flex: 2;
    text-align: center;
    align-items: center;
`;

const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ fontsize: 14 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <img src={Logo} className="App-logo" alt="Logo" width={45} />
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="white">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar