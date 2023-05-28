import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-top: 10px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 20px 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin: 15px 0 10px;
  }
`;

const ProductItem = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #888;
  margin-top: 5px;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 5px;
`;
export default function NewProducts({ products }) {

  console.log({products})
  return (
    <Center>
        <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox key={product.id} {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
