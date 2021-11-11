import { Fragment, useContext } from "react";
import { useIdentityContext } from "react-netlify-identity-gotrue";

import CartContext from "../providers/CartContext";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";

const NavBar = (props) => {
  const cartCtx = useContext(CartContext);
  const identity = useIdentityContext();
  const greeting = `Hello, ${identity.user?.user_metadata?.full_name}`;
  const cartItemsTotal = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <Stack direction="row" spacing={2}>
      <h1>React Drug Store Cosmetics</h1>

      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        onClick={props.onClick}
      >
        My Cart
        <span
          style={{
            backgroundColor: "#fff",
            color: "#1976d2",
            marginLeft: "16px",
            paddingLeft: "10px",
            paddingTop: "2px",
            paddingRight: "10px",
            paddingBottom: "2px",
            borderRadius: "16px",
          }}
        >
          {cartItemsTotal}
        </span>
      </Button>
      {identity.user && (
        <Fragment>
          <h3>{greeting}</h3>
          <Button variant="contained">Sign Out</Button>
        </Fragment>
      )}

      {!identity.user && (
        <Fragment>
          <Button variant="contained">Sign In</Button>
          <Button variant="contained">Sign Up</Button>
        </Fragment>
      )}
    </Stack>
  );
};

export default NavBar;
