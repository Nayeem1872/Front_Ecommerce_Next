import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const SVGImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  box-shadow: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 10px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const Continue = styled.p`
  display: flex;
  a {
    text-decoration: none;
    font-weight: 100;
    color: black;
  }
`;
const CashOn = styled.div`
margin-top: 10px;

`;



export default function CartPage() {
  const { cartProducts,addProduct, removeProduct,clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [city,setCity] = useState('')
  const [postalCode,setPostalCode] = useState('')
  const [address,setAddress] = useState('')
  const [mobile,setMobile] = useState('')
  const [isSuccess,setIsSuccess] = useState(false);



  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }else{
      setProducts([])
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, [clearCart]);


  function more (id){
    addProduct(id)

  }
  function less (id){
    removeProduct(id)

  }
  async function goToPayment(){
    const response = await axios.post('/api/checkout',{
      name,email,city,postalCode,address,mobile,cartProducts,
    });
    if(response.data.url){
      window.location = response.data.url
    }
  }
  async function goToCash(){
    const response = await axios.post('/api/cashOnDelivery',{
      name,email,city,postalCode,address,mobile,cartProducts,
    });
    setIsSuccess(true)
    clearCart()
    console.log(response)
    // if(response.data.url){
    //   window.location = response.data.url
    // }
  }




  let total = 0;
  for (const productId of cartProducts){
    const price = products.find(p=> p._id===productId)?.price || 0;
    total += price;
  }
  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
            <Heading>Thanks for shopping with us!</Heading>
          <Message>Your order has been placed successfully.</Message>
              <Continue >
              <Link href='/'>Continue Shopping →</Link> 

              </Continue>
             
            </Box>
          </ColumnsWrapper>
        </Center>
        
      </>
    );
  }


  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty!!
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>


              
              </div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                        <img src={product.images[0]} alt="Image" />
                        </ProductImageBox>
                       
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={()=>less(product._id)}>-</Button>
                        <QuantityLabel >{cartProducts.filter((id) => id === product._id).length}</QuantityLabel>
                        
                        <Button onClick={()=>more(product._id)}>+</Button>
                      </td>
                      <td>৳{cartProducts.filter((id) => id === product._id).length * product.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total :৳ {total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>

          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>
              
              <Input type="text" placeholder="Name" value={name} name="name" onChange={ev=>setName(ev.target.value)} />
              <Input type="text" placeholder="Email"value={email} name="email" onChange={ev=>setEmail(ev.target.value)} />
              <CityHolder>
              <Input type="text" placeholder="City"value={city} name="city" onChange={ev=>setCity(ev.target.value)} />
              <Input type="number" placeholder="Postal Code"value={postalCode} name="postalCode" onChange={ev=>setPostalCode(ev.target.value)} />

              </CityHolder>
              
              <Input type="text" placeholder="Address"value={address} name="address" onChange={ev=>setAddress(ev.target.value)} />
              <Input type="number" placeholder="Mobile Number"value={mobile} name="mobile" onChange={ev=>setMobile(ev.target.value)} />
             
              <Button black block onClick={goToPayment}>
                Continue to payment online
              </Button>
             <CashOn>

              <Button  block onClick={goToCash}>
                Cash on delivery
              </Button>

             </CashOn>

              
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
      <Footer />
    </>
  );
}
