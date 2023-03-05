import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex:
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({ position: "relative", width: "100px" })}
`;
const Title = styled.h1`
    margin-bottom: 20px;
    ${mobile({ marginBottom: "10px", fontSize: "12px" })}
`;

const Area = styled.div`
  margin-bottom: 20px;
  ${mobile({ marginBottom: "10px", fontSize: "12px" })}
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-colour: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ fontSize: "12px", marginBottom: "20px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Info>
        <Title>{item.title}</Title>
        <Area>{item.area}</Area>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
