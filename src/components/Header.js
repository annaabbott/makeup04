import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import headerImg from "../images/headerImg.jpg";
// import CartButton from "./Cart/CartButton";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box  />
        
        {/* for buttons (below) in MUI use button group */}
        <NavBar onClick={props.onSetVisible}/>
        {/* <CartButton /> */}
        
        <img src={headerImg} alt="An assortment of eyeshadow"/> 
        
        {/* Photo by Siora Photography on Unsplash */}

      </Container>
    </React.Fragment>
  );
}

export default Header;


