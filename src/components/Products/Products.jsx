import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
/* 
create local products
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "Rp.1.999.999",
    image:
      "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwc6fd9556/images/58553901/Rebel_58553901-00_blackwhite_hi-res.jpg?sw=558&sh=558&sm=fit",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "Rp.16.999.999",
    image:
      "https://static.bhphoto.com/images/images2500x2500/1588701104_1560524.jpg",
  },
];
*/

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container justtify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
