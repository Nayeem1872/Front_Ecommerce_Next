import Featured from "@/components/Featured";
import Header from "@/components/Header";

import {Product} from "@/models/Products";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import AllProducts from "@/components/AllProducts";
import Footer from "@/components/Footer";
// import NewProducts from "@/components/NewProducts";
// import { WishedProduct } from "@/models/WishedProduct";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { Setting } from "@/models/Setting";



export default function HomePage({product,newProducts,allProducts}) {
  console.log(product)
  return (
    <div>
      <Header />
      
       <Featured product={product} /> 
       
      <NewProducts products={newProducts}  /> 
      < AllProducts products={allProducts} />

      < Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6463f800a45217478e02f6d3';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:4});
  const allProducts = await Product.find({}, null, {sort: {'_id': 1}, limit:8});
  return {
    props: {product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
    },
  };
}