import Featured from "@/components/Featured";
import Header from "@/components/Header";

import {Product} from "@/models/Products";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
// import NewProducts from "@/components/NewProducts";

export default function HomePage({product,newProducts}) {
  console.log(product)
  return (
    <div>
      <Header />
      
       <Featured product={product} /> 
       
      <NewProducts products={newProducts} /> 
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6463f800a45217478e02f6d3';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}