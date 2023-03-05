
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 10px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Purpose = styled.h3`
    font-weight: 200;
    font-size: 30px;
    margin: 20px 0px;
`;

const Price = styled.h2`
    font-weight: 300;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    alogn-items:center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterWeight = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`;

const FilterWeightOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://memorries.com/assets/products/cake.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Cake Choclate</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, minus? Asperiores quod cumque hic officia eum assumenda facere ipsa harum enim provident nesciunt, exercitationem error explicabo quo cum pariatur suscipit!</Desc>
                    <Purpose>Birthday Cake</Purpose>
                    <Price>₹.250.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Weight</FilterTitle>
                            <FilterWeight>
                                <FilterWeightOption>250 Grams</FilterWeightOption>
                                <FilterWeightOption>500 Grams</FilterWeightOption>
                                <FilterWeightOption>1 K.G.</FilterWeightOption>
                                <FilterWeightOption>2 K.G.</FilterWeightOption>
                                <FilterWeightOption>Customised</FilterWeightOption>
                            </FilterWeight>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product