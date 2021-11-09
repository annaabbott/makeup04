import { useContext } from "react";
import CartContext from "../providers/CartContext";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";

const NavBar = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsTotal = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <Stack direction="row" spacing={2}>
        <h1>React Drug Store Cosmetics</h1>
      <Button variant="contained" startIcon={<FavoriteIcon />}>
        My Favorites
      </Button>
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
      <Button variant="contained">Sign In</Button>
    </Stack>
  );
};

export default NavBar;
