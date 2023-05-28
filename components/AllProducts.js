import { styled } from "styled-components";
import Center from "./Center";
import AllProductBox from "./AllProductsBox";
import Link from "next/link";



const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 50px 0 20px;
  font-weight: normal;
`;

const ShowAllSquare = styled(Link)`
  background-color: #ddd;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #555;
  text-decoration: none;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export default function NewProducts({ products }) {

  console.log({products})
  return (
    <Center>
        <Title>All Products</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <AllProductBox key={product.id} {...product} />)}
      </ProductsGrid>
      <ShowAllSquare href={"/products"}>
                  Show all Products &rarr;
    </ShowAllSquare>

    </Center>
  );
}
