import { mongooseConnect } from "@/lib/mongoose";
import { CashOnDelivery } from "@/models/CashOnDelivery";

import { Product } from "@/models/Products";


export default async function handler(req, res) {
    await mongooseConnect();
  if (req.method === 'POST') {
    // Handle the POST request here
    const { name, email, city, postalCode, address, mobile, cartProducts } = req.body;
    const productsIds = cartProducts
    const unquieIds = [...new Set(productsIds)]
    const productsInfos = await Product.find({_id:unquieIds});
    let line_items = []
    for(const productId of unquieIds){
        const productInfo = productsInfos.find (p=>p._id.toString()===productId)
        const quantity = productsIds.filter(id=>id===productId)?.length || 0;
        if(quantity>0 && productInfo ){
            line_items.push({
                quantity,
                price_data:{
                    currency:'BDT',
                    product_data:{name:productInfo.title},
                    unit_amount: productInfo.price*100,
                }
            });
        }
    }



    const orderDoc = await CashOnDelivery.create({
        line_items,
        name,
        email,
        city,
        postalCode,
        address,
        mobile,
        paid: false,
      })
    const response = {
      status: 'success',
      message: 'Cash on delivery request received',
    };


    res.status(200).json(response);
  } else {
    // Method Not Allowed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
