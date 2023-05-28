import { styled } from "styled-components"
import Button from "./Button";
// import Title from "./Title";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";




const ProductWrapper = styled.div`


`;


const Box = styled(Link)`
background-color: #fff;
padding: 10px;
height: 180px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;

img{
    max-width: 100%;
    max-height: 150px;
}

`;


const Title = styled(Link)`
font-weight: normal;
font-size: 0.9rem;
color: inherit;
text-decoration: none;
margin: 0;

`;

const ProductInfoBox = styled.div`
margin-top: 5px;
`;

const PriceRow = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
`;

const Price = styled.div`
font-size: 1.3rem;
font-weight: bold;

`;



export default function ProductBox ({_id,title,category,price,images}){
    const {addProduct} = useContext(CartContext)
    const url = '/product/'+_id;
    console.log(category)
    return (
        <ProductWrapper>

<Title href={url}>{category}</Title>

        <Box href={url}>
            <div>
            <img src={images[0]} alt="" />
            </div>
            
            
        </Box>
        <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
            <Price>
            ৳{price}

            </Price>
            <Button onClick={()=>addProduct(_id)} primary outline><CartIcon alt="Add to Cart"/></Button>
              </PriceRow>
        
        </ProductInfoBox>
        </ProductWrapper>
       
        
    )
}