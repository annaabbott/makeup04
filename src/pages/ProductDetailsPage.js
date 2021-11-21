import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductDataContext from "../providers/ProductDataContext";
import { CssBaseline } from "@mui/material";
import Container from '@mui/material/Container';

const ProductDetailsPage = () => {
  const productContext = useContext(ProductDataContext);
  const { productId, categoryName } = useParams();

  if (productContext.isLoading) {
    return <div>Loading . . .</div>;
  }

  const category = productContext.products.find((c) => c.name === categoryName);
  if (!category) {
    return (
      <div>Error: This product category {categoryName} is unavailable.</div>
    );
  }

  const _id = parseInt(productId);
  const product = category.items.find((i) => i.id === _id);
  if (!product) {
    return <div>Error: This product {productId} is unavailable.</div>;
  }

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container>
      <Box>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          {product?.name}
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          {product?.description}
        </Typography>
      </Box>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
