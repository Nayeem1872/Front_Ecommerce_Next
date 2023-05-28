import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { useContext } from "react";
import { styled } from "styled-components";


const ColWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px ;
  

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #555;
`;

const Pb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  color: #888;
  margin-bottom: 40px;
`;
const PA = styled.div`
display: flex;
gap: 20px;

`;


export default function ProductPage({product}){

    const {addProduct} = useContext(CartContext)

    return(
        <>
        <Header />
        <Center>
            <ColWrapper>
            <WhiteBox>
                <ProductImages images={product.images} />
            </WhiteBox>
            
            <Pb>
            <Title>{product.title}</Title>

            <p>{product.description}</p>
            <PA>

            <Price>Price:৳{product.price}</Price>

<Button primary onClick={()=>addProduct(product._id)}> <CartIcon/> Add to cart</Button>

            </PA>

            </Pb>
            
            
            
           
            
            
            
            </ColWrapper>
            
        </Center>
        
        
        </>
    )
}
export async function getServerSideProps(context){
    await mongooseConnect()
    const {id} = context.query;
    const product =await Product.findById(id)
    return{
        props:{
            product:JSON.parse(JSON.stringify(product))
        }
    }
}