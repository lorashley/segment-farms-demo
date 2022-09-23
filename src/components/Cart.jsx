import { Button } from "@mui/material";
import * as React from "react";
import CheckoutAlert from "./CheckoutAlert";

export default function Cart(props) {
  const { cart, onAdd, onRemove, onPay } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const subtotal = (item) => {
    return item.qty * item.price
  }

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0)

  const handlePayment = () => {
    console.log(total)
    onPay(total)
    handleClose()
  }

  return (
    <>
      <h1>Your Cart</h1>
      {cart.length < 1 && "Your cart is empty"}
      {cart.length > 0 &&
        cart.map((item) => (
          <div key={item.name} align="left">


            {item.name} x {item.qty}{" "} = ${subtotal(item)}
            <Button onClick={() => onAdd(item)}>Add</Button>
            <Button onClick={() => onRemove(item)}>Remove</Button>

          </div>
        ))
        }
        {cart.length > 0 && <><br/><Button variant="contained" onClick={handleClickOpen}>Checkout ${total}</Button></>}
        <CheckoutAlert open={open}
        onClose={handleClose} onCancel={()=> handleClose()} onPay={handlePayment}/>
    </>
  );
}
