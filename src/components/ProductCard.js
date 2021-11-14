import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import image from "../images/placeholderImg.jpg"

const cardStyle = {
    width: "300px",
    
  };
  
  const bottomRow = {
    display: "flex",
    justifyContent: "space-between",
  };

/*
{
      "id": 313,
      "brand": "covergirl",
      "name": "CoverGirl Trunaked Eyeshadow Palettes in Roses",
      "price": "12.99",
      "price_sign": null,
      "currency": null,
      "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/e8be715d17f0bcc25ffe81f4286ffac0_ra,w158,h184_pa,w158,h184.png",
      "product_link": "https://well.ca/products/covergirl-trunaked-eyeshadow_112732.html",
      "website_link": "https://well.ca",
      "description": "CoverGirl Trunaked Eyeshadow Palettes feature universally flattering, neutral shades that are made to be blended together, so you can mix and match colors and always look flawless. Features:Each eye shadow palette comes with 8 shadesEach shade is highly pigmentedEndless possibilities for neutral daytime to dramatic nighttime looks",
      "rating": 5,
      "category": "palette",
      "product_type": "eyeshadow",
      "tag_list": [],
      "created_at": "2016-10-01T18:31:16.086Z",
      "updated_at": "2017-12-26T00:33:00.382Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/313.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/313/original/open-uri20171223-4-kfj90h?1514063299",
      "product_colors": []
    }

*/


  function CapitalizeString(phrase) {
    return phrase[0].toUpperCase() + phrase.slice(1);
  }
  
  function ProductCard({
    product
  }) {
    return (
      <Card sx={cardStyle}>
        <CardContent>
          <h2>{product.brand || "(Generic)"}</h2>
          <div style={{height: "3em"}}>{product.name}</div>
          {product.image_link ? <CardMedia component="img" height="140" src={product.image_link} /> : <CardMedia component="img" height="140" image={image} />}
          <div>
            $ {Math.round(product.price).toFixed(2)}
          </div>
          <Box sx={bottomRow}>
            <Button >View Product Details</Button>
              
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    );
  }
  
  export default ProductCard;
  