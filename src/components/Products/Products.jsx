import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes", price: "Rp.1.999.999" },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "Rp.16.999.999",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justtify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
