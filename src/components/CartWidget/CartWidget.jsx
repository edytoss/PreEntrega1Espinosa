import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = (props) => {
  return (
    <div className="carrito">
      <a href="#">
        <ShoppingCartIcon />
      </a>
      <p>{props.cantidad}</p>
    </div>
  );
};

export default CartWidget;
